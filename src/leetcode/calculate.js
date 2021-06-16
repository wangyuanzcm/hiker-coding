/**
 * 基本计算器 II
 * @link: https://leetcode-cn.com/problems/basic-calculator-ii/
 * @param {string} s
 * @return {number}
 */ 

 var calculate = function(s) {
    s=s.trim();
    let stack = [];
    let preSign="+";
    let num = 0;
    for(let i=0;i<s.length;i++){
        if(!isNaN(Number(s[i]))&&s[i]!==' '){
            num = num*10+s[i].charCodeAt()-'0'.charCodeAt();
        }
        if(isNaN(Number(s[i]))||i===s.length-1){
            switch(preSign){
                case "+":
                    stack.push(num);
                    break;
                case "-":
                    stack.push(-num);
                    break;
                case "*":
                    stack.push(stack.pop()*num);
                    break;
                default:
                    stack.push(stack.pop()/num|0);
            }
            preSign = s[i];
            num =0;
        }
    }
    let res = 0;
    while(stack.length){
        res+=stack.pop();
    }
    return res;
};

export default calculate;
