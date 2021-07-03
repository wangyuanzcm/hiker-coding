/**
 * 387. 字符串中的第一个唯一字符
 * @link: https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */ 
 const firstUniqChar = s => {
    const len = s.length;
    const map = {};
    for (let i = 0; i < len; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }
    for (let i = 0; i < len; i++) {
        if (map[s[i]] === 1) return i;
    }
    return -1;
};


export default firstUniqChar;
