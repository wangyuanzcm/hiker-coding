
/**
 * 最小覆盖子串
 * @link: https://leetcode-cn.com/problems/minimum-window-substring/
 * @param {string} s
 *  @param {string} t
 */
const minWindow = (s, t) => {
    let l = 0, r = 0;
    let res = "";
    const map = new Map();
    for (let item of t) {
        let value = map.get(item) || 0;
        map.set(item, ++value);
    }
    let count = map.size;
    while(r<s.length){
        const c1 = s[r];
        if(map.has(c1)){
            map.set(c1,map.get(c1)-1);
            if(map.get(c1)===0) count--;
        }
        while(count === 0) {
            const c2 = s[l];
            let newRes = s.slice(l,r+1);
            if(!res||newRes.length<res.length) res = newRes;
            if(map.has(c2)){
                map.set(c2,map.get(c2)+1);
                if(map.get(c2)===1) count++;
            }
            l++;
        }
        r++;
    }
    return res;
};

export default minWindow;
