/**
 * 手写Promise A+规范代码
 * 这部分规范的测试用例见下面的链接，实际上我们这个手写代码的测试用例覆盖率已经达到87%。
 * @link: Promises/A+规范 https://www.ituring.com.cn/article/66566
 * @link Promise A+规范的测试用例仓库 https://github.com/promises-aplus/promises-tests
 * 
 * @param {*} params
 */
const PENDING = "Pending";
const FULFILLED = "Fulfilled";
const REJECTED = "Rejected";
function promiseResolution(promise2, x, resolve, reject) {
  if (promise2 === x) {
    throw new Error("循环引用promise");
  }
  if (x instanceof MyPromise) {
    if (x.state === PENDING) {
      x.then((y) => {
        promiseResolution(promise2, y, resolve, reject);
      }, reject);
    } else {
      x.state === FULFILLED && resolve(x.value);
      x.state === REJECTED && reject(x.value);
    }
  }
  if (
    (typeof x === "object" || typeof x === "function") &&
    typeof x !== null
  ) {
    if (typeof x.then === "function") {
      x.then((y) => {
        promiseResolution(promise2, y, resolve, reject);
      }, reject);
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}
class MyPromise {

  constructor(fn) {
    this.state = PENDING;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];

    const resolve = (val) => {
      if (
        (typeof val === "function" || typeof val === "object") &&
        val.then
      ) {
        promiseResolution(this, val, resolve, reject);
        return;
      }
      setTimeout(() => {
        if (this.state === PENDING) {
          this.state = FULFILLED;
          this.value = val;
          this.resolveCallbacks.map((fn) => fn(val));
        }
      });
    };
    const reject = (val) => {
      if (
        (typeof val === "function" || typeof val === "object") &&
        val.then
      ) {
        promiseResolution(this, val, resolve, reject);
        return;
      }
      setTimeout(() => {
        if (this.state === PENDING) {
          this.state = REJECTED;
          this.value = val;
          this.rejectCallbacks.map((fn) => fn(val));
        }
      });
    };

    fn(resolve, reject);
  }
  then(onFulfilled = (val) => val, onRejected = (err) => {
    throw new Error(err);
  }) {
    let promise2 = null;
    if (this.state === FULFILLED) {
      promise2 = new MyPromise((resolve, reject) => {
        const x = onFulfilled(this.value);
        promiseResolution(promise2, x, resolve, reject);
      });
    }
    if (this.state === PENDING) {
      promise2 = new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          const x = onFulfilled(this.value);
          promiseResolution(promise2, x, resolve, reject);


        });
        this.rejectCallbacks.push(() => {
          const x = onRejected(this.value);
          promiseResolution(promise2, x, resolve, reject);

        });
      });
    }
    if (this.state === REJECTED) {
      promise2 = new MyPromise((resolve, reject) => {

        const x = onRejected(this.value);
        promiseResolution(promise2, x, resolve, reject);
      });
    }
    return promise2;
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  /**
   * 实现 resolve 静态方法有三个要点:
   * 1. 传参为一个 Promise, 则直接返回它。
   * 2. 传参为一个 thenable 对象，返回的 Promise 会跟随这个对象，采用它的最终状态作为自己的状态。
   * 3. 其他情况，直接返回以该值为成功状态的promise对象。
   */
  static resolve(params){
    if(params instanceof Promise) return params;
    return new Promise((resolve, reject) => {
      if(params&&params.then&&typeof params.then === 'function'){
        params.then(resolve, reject);
      }else{
        resolve(params);
      }
    })
  }
  /**
   * Promise.reject 中传入的参数会作为一个 reason 原封不动地往下传, 实现如下:
   */
  static reject(reason){
    return new Promise((resolve, reject) => {
      reject(reason);
    })
  }
  /**
   * 无论当前 Promise 是成功还是失败，调用finally之后都会执行 finally 中传入的函数，并且将值原封不动的往下传。
   */
  static finally(callback){
    this.then((value)=>{
      return Promise.resolve(callback()).then(() =>value);
    },err =>{
      return Promise.resolve(callback()).then(() =>err);
    })
  }
  /**
   * 对于 all 方法而言，需要完成下面的核心功能:
   * 1. 传入参数为一个空的可迭代对象，则直接进行resolve。
   * 2. 如果参数中有一个promise失败，那么Promise.all返回的promise对象失败。
   * 3. 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组
   **/
  static all(promiseArray) {
    return new MyPromise((resolve, reject) => {
      const resultArray = [];
      if(promiseArray.length === 0){
        resolve(resultArray);
        return;
      }
      let successTimes = 0;
      function processResult(index, data) {
        resultArray[index] = data;
        successTimes++;
        if (successTimes === promiseArray.length) {
          resolve(resultArray);
        }
      }
      for (let i = 0; i < promiseArray.length; i++) {
        // 为什么不直接 promise[i].then, 因为promise[i]可能不是一个promise
        Promise.resolve(promiseArray[i]).then(
          (data) => {
            processResult(i, data);
          },
          (err) => reject(err)
        );
      }
    });
  }
  /**
   * race 的实现相比之下就简单一些，只要有一个 promise 执行完，直接 resolve 并停止执行。
   */
  static race(promises){
    return new Promise((resolve, reject) =>{
      let len = promises.length;
      if(len === 0) return;
      for(let i =0;i<len;i++){
        Promise.resolve(promises[i]).then((data)=>{
          resolve(data);
          return;
        }).catch(err =>{
          reject(err);
          return;
        })
      }
    })
  }
}

export default MyPromise;
