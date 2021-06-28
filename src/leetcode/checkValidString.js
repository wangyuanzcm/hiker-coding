/**
 * 678. 有效的括号字符串
 * @link https://leetcode-cn.com/problems/valid-parenthesis-string/
 * @param {string} s
 * @return {boolean}
 **/ 
 var checkValidString = function(s) {
    let leftStack = [];
    let starStack = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            leftStack.push(i);
        }else if(s[i] === "*"){
            starStack.push(i);
        }else{
            if(leftStack.length>0){
                leftStack.pop();
            }else if(starStack.length>0){
                starStack.pop();
            }else{
                return false;
            }
        }
    }
    if(leftStack.length>starStack.length) return false;
    while(leftStack.length&&starStack.length){
        if(leftStack.pop()>starStack.pop()) return false;
    }
    return true;
};

export default checkValidString;
