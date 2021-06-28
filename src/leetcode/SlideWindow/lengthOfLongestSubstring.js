/**
 * 3. 无重复字符的最长子串的长度
 * @link: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 *  */ 
const lengthOfLongestSubstring = (s) =>{
    let hash = new Map();
    let max = 0;
    let l = 0,r=0;
    while (r < s.length){
        if(hash.has(s[r])){
            l = Math.max(hash.get(s[r])+1,l);
        }
        hash.set(s[r],r);
        max = Math.max(max,r-l+1);
        r++;
    }
    return max;
};

export default lengthOfLongestSubstring;
