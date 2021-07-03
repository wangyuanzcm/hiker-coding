/**
 * 剑指 Offer 58 - I. 翻转单词顺序
 * @link: https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 * @param {string} s
 * @return {string}
 */ 
 var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

export default reverseWords;
