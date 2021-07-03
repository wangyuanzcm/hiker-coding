/**
 * 389. 找不同
 * @link: https://leetcode-cn.com/problems/find-the-difference/
 * @param {string} s
 * @param {string} t
 * @return {character}
 */ 
 var findTheDifference = function(s, t) {
    let res1 = 0;
    let res2 = 0;
    for(let c of s){
        res1+= c.charCodeAt();
    }
    for(let c of t){
        res2 += c.charCodeAt();
    }
    return String.fromCharCode(res2-res1)
};

export default findTheDifference;
