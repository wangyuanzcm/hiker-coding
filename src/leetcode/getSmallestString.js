/**
 * 1663. 具有给定数值的最小字符串
 * @link: https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/
 * @param {number} n
 * @param {number} k
 * @return {string}
 **/ 
 var getSmallestString = function(n, k) {
    let res = new Array(n).fill('a');
    let remain = k-n;
    let i = n-1;
    while(remain){
        if(remain>25){
            remain-=25;
            res[i] = 'z';
            i--;
        }else{
            res[i] = String.fromCharCode(97+remain);
            remain = 0;
        }
    }
    return res.join('')
};

export default getSmallestString;
