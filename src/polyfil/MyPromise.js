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
  static all(promiseArray) {
    return new MyPromise((resolve, reject) => {
      const resultArray = [];
      let successTimes = 0;
      function processResult(index, data) {
        resultArray[index] = data;
        successTimes++;
        if (successTimes === promiseArray.length) {
          resolve(resultArray);
        }
      }
      for (let i = 0; i < promiseArray.length; i++) {
        promiseArray[i].then(
          (data) => {
            processResult(i, data);
          },
          (err) => reject(err)
        );
      }
    });
  }
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
}

export default MyPromise;
