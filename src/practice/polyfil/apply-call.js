/**
 * 手写一个call或 apply
 * @link: JavaScript深入之call和apply的模拟实现 https://github.com/mqyqingfeng/Blog/issues/11
 * @param {function||null} context
 */
const MyCall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('not a function')
    }
    context = context || window;
    context.fn = this;
    let params = Array.prototype.slice.call(arguments, 1)
    let result = context.fn(...params);
    delete context.fn;
    return result;
};
const MyApply = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('not a function')
    }
    context = context || window;
    context.fn = this;
    let result = arguments[1]?context.fn(...arguments[1]):context.fn();
    delete context.fn;
    return result;
}
export { MyCall,MyApply };
