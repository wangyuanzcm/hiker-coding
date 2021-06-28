/**
 * 给定一个字符串 s ，找出 至多 包含两个不同字符的最长子串 t ，并返回该子串的长度。
 * @link: https://leetcode-cn.com/problems/longest-substring-with-at-most-two-distinct-characters/
 * @param {string} s
 * @return {number}
 **/ 
 var lengthOfLongestSubstringTwoDistinct = function(s) {
    if(s.length<3) return s.length;
    let hash = new Map();
    let max = 0;
    let l=0,r=0;
    while(r<s.length){
        if(hash.size<3){
            hash.set(s[r],r);
            r++;
        }
        if(hash.size==3){
            //找到最左边的元素
            let index = Math.min(...hash.values());
            hash.delete(s[index]);
            l = index+1;
        }
        max=Math.max(max,r-l);
    }
    return max;
};

export default lengthOfLongestSubstringTwoDistinct;
