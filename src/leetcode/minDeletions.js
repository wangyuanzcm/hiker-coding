/**
 * 1647. 字符频次唯一的最小删除次数
 * @link: https://leetcode-cn.com/problems/minimum-deletions-to-make-character-frequencies-unique/
 * @param {string} str
 * @return {number}
 */ 
 var minDeletions = function(str) {
    let map = {};
    for(let item of str){
        map[item]?map[item]++:map[item]=1;
    }
    let stack = Object.entries(map).sort((a,b)=>a[1]-b[1]);
    let res = 0;
    for(let i=1;i<stack.length;i++){
        if(stack[i][1]<=stack[i-1][1]&&stack[i-1][1]!==0){
            stack[i-1][1] -=1;
            res++;
            i=0;
        }
    }
    return res;
};

export default minDeletions;
