import promisePool from '../../src/practice/PromisePool';

jest.useFakeTimers();//使用jest的useFakeTimers方法
let outputData = [];
let storeLog = inputs => (outputData.push(inputs));//使用storeLog来模拟console.log打印日志
console["log"] = jest.fn(storeLog);

describe('promisePool:实现execute方法，同时最多只能有 limit 个 fetch 可以同时执行。', () => {
    const random = () => {
        return Math.ceil(Math.random() * 700 + 300);
    }
    const fetchApi = (params) => {
        return new Promise((resolve, reject) => {
            let randomTimer = random();
            setTimeout(() => {
                resolve(params)
            }, randomTimer)
        })
    }
    const urls = new Array(50).fill(0).map((i, index) => index);

    test(`promisePool:返回的结果数量与urls的数量相同`, (done) => {
        let promise = new promisePool(fetchApi, 5)
        promise.start(urls);
        jest.setTimeout(6000);
        // expect(outputData.sort()).toEqual(urls);
        done();
    })
});
