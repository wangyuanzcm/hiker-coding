/**
 * 821. 字符的最短距离
 * @link: https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 * @param {*} params
 */ 
 var shortestToChar = function(s, c) {
    let prev = -Infinity;
    let res = new Array(s.length);
    for(let i=0;i<s.length;i++){
        if(s[i]===c){
            prev = i;
        } 
        res[i]= i-prev
    }
    prev=Infinity;
    for(let i=s.length-1;i>=0;i--){
        if(s[i] === c){
            prev=i;
        }
        res[i] = Math.min(res[i],prev-i);
    }
    return res;
};

export default shortestToChar;
