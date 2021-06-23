/**
 * 代码实现计时器时间转总秒数
 * 通话时长一般为xx:xx:xx的格式，如：
 * 01:08:20为4100秒
 * 08:02为500秒要求实现字符串转总秒数
 * @param {*} params
 */ 
const toSeconds = (str) =>{
    return str.split(":").reduceRight((pre,cur,index,arr) => pre+cur*Math.pow(60,arr.length-index-1),0)
};

export default toSeconds;
