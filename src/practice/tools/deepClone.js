/**
 * 手写一个JS深拷贝
 * 考虑到symbol类型，使用WeakMap的时候可以只使用对象作为key值，排除了symbol
 * @param {*} params
 */ 
const deepClone = (target, hash = new WeakMap()) =>{
    if(typeof target !== 'object' || target === null){
        return target;
    }
    if(hash.get(target)) return target;
    const cloneTarget = Array.isArray(target) ? []:{};
    hash.set(target, cloneTarget);
    const symKeys = Object.getOwnPropertySymbols(target);
    if(symKeys.length){
        symKeys.forEach((symKey) => {
            if(typeof target[symKey] === 'object' || target !== null){
                cloneTarget[symKey] = deepClone(target[symKey],hash);
            }else{
                cloneTarget[symKey] =target[symKey];
            }
        })
    }
    for(let i in target){
        if(Object.prototype.hasOwnProperty.call(target,i)){
            cloneTarget[i] = typeof target[i] === 'object' || target[i] !== null?deepClone(target[i],hash):target[i];
        }
    }
    return cloneTarget;
};

export default deepClone;
