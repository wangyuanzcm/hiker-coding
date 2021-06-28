/**
 * 340. 至多包含 K 个不同字符的最长子串
 * @link: https://leetcode-cn.com/problems/longest-substring-with-at-most-k-distinct-characters/
 * @param {string} s
 * @param {number} k
 * @return {number}
 **/ 
 var lengthOfLongestSubstringKDistinct = function(s, k) {
    let hash = new Map();
    let max = 0;
    let l=0,r=0;
    while(r<s.length){
        hash.set(s[r],r);
        r++;
        if(hash.size==k+1){
            let index = Math.min(...hash.values())
            hash.delete(s[index]);
            l=index+1;
        }
        max = Math.max(max,r-l);
    }
    return max
};

export default lengthOfLongestSubstringKDistinct;
