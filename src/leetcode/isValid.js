/**
 * 20. 有效的括号
 * @link: https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */ 
 var isValid = function(s) {
    if(s.length % 2 === 1){
        return false;
    }
    let map = new Map([[')','('],['}','{'],[']','[']]);
    let stack = [];

    for(let i = 0 ; i < s.length; i++){
        let char = s[i];
        let value  = map.get(char)
        if(value){
            let right = stack.pop();
            if(right !== value){
                return false
            }
        } else {
            stack.push(char)
        }
    }
    return stack.length === 0
};

export default isValid;
