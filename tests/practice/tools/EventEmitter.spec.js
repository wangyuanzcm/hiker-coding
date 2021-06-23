import EventEmitter from '../../../src/practice/tools/EventEmitter';

let outputData = [];
let storeLog = inputs => (outputData.push(inputs));//使用storeLog来模拟console.log打印日志
console["log"] = jest.fn(storeLog);
describe('eventEmitter:组件触发与监听的方法', () => {
    test(`eventEmitter:测试eventEmitter的on和emit方法`, () => {
        let emitter = new EventEmitter()
        emitter.on('ages', age => {
           console.log(age)
        })
        // 触发事件
        emitter.trigger('ages', 18)  // 18
        expect(outputData.shift()).toEqual(18)
    })
});
