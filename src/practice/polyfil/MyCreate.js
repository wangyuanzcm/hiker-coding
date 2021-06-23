/**
 * .手写实现Object.create的基本原理
 * @param {*} params
 */ 
const myCreate = (obj) =>{
    function fn(){}
    fn.prototype = obj;
    return new fn()
};

export default myCreate;
