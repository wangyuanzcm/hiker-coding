/**
 * 9. 回文数
 * @link: https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */ 
 var isPalindrome = function(x) {
    let s = String(x);
    return s.split('').reverse().join('') === s;
};

export default isPalindrome;
