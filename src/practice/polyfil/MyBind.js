/**
 * 手写一个Function.bind
 * @link: JavaScript深入之bind的模拟实现 https://github.com/mqyqingfeng/Blog/issues/12
 * @param {*} context
 */
const myBind = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNop = function () {}//作为中转函数，避免实例的原型与被绑定的对象直接绑定到一起
    var fn = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fn?this:context, args.concat(bindArgs))
    }
    fNop.prototype = this.prototype;
    fn.prototype = new fNop();
    return fn
};

export default myBind;
