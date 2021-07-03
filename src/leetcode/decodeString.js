/**
 * 394. 字符串解码
 * @link: https://leetcode-cn.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 */ 
 var decodeString = function(s) {
    let numStack = [];
    let strStack = [];
    let num = 0;
    let res = '';
    for(let char of s){
        if(!isNaN(char)){
            num = num*10 +Number(char);
        }else if(char === '['){
            strStack.push(res);
            res = '';
            numStack.push(num);
            num=0;
        }else if(char === ']'){
            let repeatTimes = numStack.pop();
            res = strStack.pop()+res.repeat(repeatTimes);
        }else{
            res+= char;
        }
    }
    return res;
};

export default decodeString;
