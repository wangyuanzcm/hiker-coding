/**
 * 手写数组的reduce方法
 * @param {*} params
 */ 
const myReduce = (arr,callback,initValue) =>{
    let flag = !Array.isArray(arr)||!arr.length||typeof callback !== 'function';
    if(flag) return [];
    let isValue = initValue === 0?!initValue:!!initValue;//获取初始值参数
    let reduceValue = isValue?initValue:arr[0];
    for(let index=isValue?0:1;index<arr.length;index++) {
        reduceValue = callback(reduceValue,arr[index],index,arr);
    }
    return reduceValue;
};
export default myReduce;
