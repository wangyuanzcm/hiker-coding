/**
 * 290. 单词规律
 * @link: https://leetcode-cn.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */ 
 var wordPattern = function(pattern, s) {
    let hashParttern = new Map();
    let hashS = new Map();
    let words = s.split(' ');
    if(pattern.length !== words.length) return false;
    for(let [key,val] of Object.entries(words)){
        let char = pattern[key];
        if(hashParttern.has(char)&&hashParttern.get(char)!==val||hashS.has(val)&&hashS.get(val) !== char){
            return false;
        }
        hashParttern.set(char,val);
        hashS.set(val,char);
    }
    return true;
};

export default wordPattern;
