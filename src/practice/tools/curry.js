/**
 * 函数柯理化
 * es6的写法使用了闭包，将两次参数合并到一起
 * @param {*} params
 */
const curry = (fn, arr = []) => (...args) => (arg => arg.length === fn.length ? fn(...arg) : curry(fn, arg))([...arr, ...args]);

export default curry;
