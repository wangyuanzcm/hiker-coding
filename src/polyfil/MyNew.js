/**
 * 手写实现new操作符
 * new操作符做了三件事情：
 * 1. 创建了一个继承了原对象的对象
 * 2. 使用指定的参数调用构造函数，并将this指向新对象
 * 3. 由构造函数返回的对象就是new表达式的结果，或者是创建的新对象
 * @link: 链接,引用文档等
 * @param {*} params
 */ 
const myNew = (fn) =>{
    return function(){
        let obj = {
            _proto_:fn.prototype
        };
        let ret = fn.call(obj,...arguments);
        return typeof ret === "object" ?ret:obj;
    }
};

export default myNew;
