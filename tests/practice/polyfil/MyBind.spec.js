import myBind from '../../../src/practice/polyfil/MyBind';

let outputData = [];
let storeLog = inputs => (outputData.push(inputs));//使用storeLog来模拟console.log打印日志

describe('myBind:手写一个Function.bind', () => {
  
    test(`myBind:bind 函数常规使用`, () => {
        Function.prototype.myBind = myBind;
        var module = {
            x: 81,
            getX: function () { return this.x; }
        }; 
        var retrieveX = module.getX;
        var myBoundGetX = retrieveX.myBind(module);
        var boundGetX = retrieveX.bind(module);
        expect(myBoundGetX()).toEqual(boundGetX())
        delete Function.myBind;
    })
    test(`myBind: bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效`, () => {
        Function.prototype.myBind = myBind;
        var foo = {
            value: 1
        };
        function bar(name, age) {
            this.habit = 'shopping';
            console.log(this.value);
            console.log(name);
            console.log(age);
        }
        bar.prototype.friend = 'kevin';
        var bindFoo = bar.myBind(foo, 'daisy');

        console["log"] = jest.fn(storeLog);

        var obj = new bindFoo('18');
        expect(outputData).toEqual([undefined,"daisy",'18'])
        expect(obj.habit).toEqual("shopping")
        expect(obj.friend).toEqual("kevin")
        delete Function.myBind;
    })
});
