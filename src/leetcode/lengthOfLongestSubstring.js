/**
 * 3. 无重复字符的最长子串
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
            if(hash.get(s[r])>=l){
                l = hash.get(s[r])+1;
            }
        }
        hash.set(s[r],r);
        max = Math.max(max,r-l+1);
        r++;
    }
    return max;
};

export default lengthOfLongestSubstring;
