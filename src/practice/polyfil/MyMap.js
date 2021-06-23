/**
 * 手写一个map
 * @param {*} params
 */ 
const myMap = (arr,callback,thisArg) =>{
    let flag = !Array.isArray(arr)||!arr.length||typeof callback !== 'function';
    if(flag) return [];
    let result = new Array(arr.length);
    for(let index=0;index<arr.length;index++) {
        result[index] = callback.call(thisArg?thisArg:arr,arr[index],index,arr);
    }
    return result;
};

export default myMap;

