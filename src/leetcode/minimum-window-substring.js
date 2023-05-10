// https://leetcode.cn/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) {
        return '';
    }
    let minLen = s.length + 1;
    let tLen = t.length
    // 首先将t字符串的数据信息放到Map里面
    let map = new Map();
    for (let i = 0; i < t.length; i++) {
        let value = map.get(t[i]) || 0;
        map.set(t[i], value + 1);
    }
    // 最终结果的左下标和右下标
    let start = 0, end = -1;
    let l = 0;
    console.log(map, 'init')
    for (let r = 0; r < s.length; r++) {
        ch = s[r];
        // 右指针持续移动，直到所有的t元素都被包含进去
        if (map.has(ch)) {
            if (map.get(ch) > 0) {
                tLen--;

            }
            map.set(ch, map.get(ch) - 1);

        } console.log(map, r, 'map')
        // 当包含所有t元素之后开始移动左边指针
        while (tLen === 0) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                start = l;
                end = r;
            }
            let lch = s[l];
            if (map.has(lch)) {
                if (map.get(lch) >= 0) {
                    tLen++;
                }
                map.set(lch, map.get(lch) + 1);

            }
            l++;
        }
    }
    return s.slice(start, end + 1);

};

