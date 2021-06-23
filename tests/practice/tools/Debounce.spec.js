import debounce from '../../../src/practice/tools/Debounce';

jest.useFakeTimers();//使用jest的useFakeTimers方法
let outputData = [];
let storeLog = inputs => (outputData.push(inputs));//使用storeLog来模拟console.log打印日志
console["log"] = jest.fn(storeLog);

describe('debounce:手写防抖函数', () => {
    test(`debounce:should debounce a function`, (done) => {
        var test = jest.fn(function (value) {
            console.log(value);
        });
        var debounced = debounce(test, 32);
        debounced('a');
        debounced('b');
        debounced('c');
        expect(outputData).toEqual([])
        expect(test).toHaveBeenCalledTimes(0);
        jest.runAllTimers();
        expect(outputData).toEqual(['c'])
        expect(test).toHaveBeenCalledTimes(1);
        done()
    })
});
