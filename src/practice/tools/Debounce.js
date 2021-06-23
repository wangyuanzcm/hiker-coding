/**
 * 手写防抖函数
 * 测试用例参考lodash中的函数测试用例
 * @param {*} params
 */ 
const debounce = (fn,delay=1000) =>{
    let timer = null;
    return function (){
        let context = this;
        let arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context,arg)
        },delay);
    }
};
export default debounce;
