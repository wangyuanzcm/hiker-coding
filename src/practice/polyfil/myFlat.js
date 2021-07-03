/**
 * 扁平化数组方法
 * @param {*} params
 */
const myFlat = (arr, depth=Infinity) => {
    return depth>0?arr.reduce((pre,cur) => pre.concat(Array.isArray(cur)?myFlat(cur,depth-1):cur),[]):arr.slice();   
};
export default myFlat;

