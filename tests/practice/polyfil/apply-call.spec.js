import {MyCall,MyApply} from '../../../src/practice/polyfil/apply-call';

describe('applyCall:手写一个call或 apply', () => {
    var foo = {
        value: 1
    };
    
    function bar(name="",age=0) {
        return {
            value:this.value,
            name:name,
            age:age
        };
    }
    test(`applyCall:apply or call 的用法`, (done) => {
        Function.prototype.MyApply = MyApply;
        Function.prototype.MyCall = MyCall;
        expect(bar.MyCall(foo)).toEqual(bar.call(foo));
        expect(bar.MyCall(foo,'kevin', 18)).toEqual(bar.call(foo,'kevin', 18));
        expect(bar.MyApply(foo)).toEqual(bar.apply(foo));
        expect(bar.MyApply(foo,['kevin', 18])).toEqual(bar.apply(foo,['kevin', 18]));

        delete Function.MyApply;
        delete Function.MyCall;
        done();
    })
  
});
