/**
 * 找出重复元素
 * @param {*} params
 */ 
const dropRepeat = (params) =>{
    let stack=[]
    return params.reduce((pre,cur)=>{
        if(stack.some(item=>isDeepEqual(item,cur))){
            pre.push(cur);
        }else{
            stack.push(cur)
        }
        return pre;
    },[]);
};
const isObject = (obj) => {
    return typeof obj === "object" && obj !== null;
};
const isDeepEqual = (obj1, obj2) => {
    if (!isObject(obj1) || !isObject(obj2)) return obj1 === obj2;
    if (obj1 === obj2) return true;
    let keys1 = Object.keys(obj1),
        keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key in obj1) {
        const res = isDeepEqual(obj1[key], obj2[key]);
        if (!res) {
            return false;
        }
    }
    return true;
};

export default dropRepeat;
