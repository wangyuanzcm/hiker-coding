import MyPromise from '../../src/polyfil/MyPromise'

describe('polyfil/myPromise:手写Promise A+规范代码', () => {
    test(`polyfil/myPromise:在setTimeOut中去resolve`, () => {
        new MyPromise(function (resolve, reject) {
            setTimeout(() => {
                resolve("step1");
            }, 1000);
        }).then((data) => {
            expect(data).toEqual("step1")
        });
    })
    test(`polyfil/myPromise:直接同步resolve`, () => {
        new MyPromise(function (resolve, reject) {
            resolve("step2");
        }).then((data) => {
            expect(data).toEqual("step2")
        });
    })
    test(`polyfil/myPromise:防止resolve多次执行`, () => {
        new MyPromise(function (resolve, reject) {
            resolve("step3");
            resolve("step3.1");
        }).then((data) => {
            expect(data).toEqual("step3")
        });
    })
    test(`polyfil/myPromise:使得then方法可以链式调用`, () => {
        new MyPromise(function (resolve, reject) {
            resolve("step4");
        })
            .then((data) => {
                expect(data).toEqual("step4")
                return "step4.1";
            })
            .then((data) => {
                expect(data).toEqual("step4.1")
            });
    })
    test(`polyfil/myPromise:支持空的then方法`, () => {
        new MyPromise(function (resolve, reject) {
            resolve("step5");
        })
            .then((data) => {
                expect(data).toEqual("step5")
                return "step5.1";
            })
            .then()
            .then((data) => {
                expect(data).toEqual("step5.1")
            });
    })
    test(`polyfil/myPromise:支持then传递thenable对象(携带then方法的对象，promise会将其当作promise对象解析)`, () => {
        new MyPromise(function (resolve, reject) {
            resolve("step6");
        })
            .then((data) => {
                expect(data).toEqual("step6")
                return {
                    then(r) {
                        r("step6.1");
                    },
                };
            })
            .then((data) => {
                expect(data).toEqual("step6.1")
            });
    })
    test(`polyfil/myPromise:支持then传递promise对象`, () => {
        new MyPromise(function (resolve, reject) {
            resolve("step7");
        })
            .then((data) => {
                expect(data).toEqual("step7")
                return new MyPromise((resolve, reject) => {
                    resolve("step7.1");
                });
            })
            .then((data) => {
                expect(data).toEqual("step7.1")
            });
    })
    test(`polyfil/myPromise:支持resolve传递promise对象`, () => {
        new MyPromise(function (resolve, reject) {
            resolve(
                new MyPromise(function (resolve, reject) {
                    resolve("step8");
                })
            );
        }).then((data) => {
            expect(data).toEqual("step8");
        });
    })
    test(`polyfil/myPromise:处理then中的循环promise，解决循环引用问题`, () => {
        //这个循环引用的测试用例暂未想好怎么处理
        const promise = new MyPromise(function (resolve, reject) {
            resolve("step9");
        });
        const promise1 = promise.then((data) => {
            return promise1;
        }).catch((err) => {
            // console.error(err,"err");
        });
    })
    test(`polyfil/myPromise:支持Promise.all静态方法`, () => {
        MyPromise.all([
            new MyPromise((resolve, reject) => {
                resolve("step10");
            }),
            new MyPromise((resolve, reject) => {
                resolve("step10.1");
            }),
        ]).then((dataList) => {
            expect(dataList).toEqual(["step10", "step10.1"]);
        });
    })
    test(`polyfil/myPromise:处理reject和catch错误抛出和收集`, () => {
        const promise2 = new MyPromise(function (resolve, reject) {
            reject("step11");
        }).then(
            null,
            (err) => {
                expect(err).toEqual("step11");
            }
        );
    })
    test(`polyfil/myPromise:支持完成态或者失败态的then`, (done) => {
        const promise3 = new MyPromise(function (resolve, reject) {
            resolve("step12");
        });
        setTimeout(() => {
            promise3.then((data) => {
                expect(data).toEqual("step12");
            });
            promise3.then((data) => {
                expect(data).toEqual("step12");
            });
            done()
        }, 1000);
    })
});
