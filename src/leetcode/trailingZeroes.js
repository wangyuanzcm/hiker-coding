/**
 * 172. 阶乘后的零
 * @link: https://leetcode-cn.com/problems/factorial-trailing-zeroes/
 * @param {number} n
 * @return {number}
 */ 
 var trailingZeroes = function(n) {
    if (n < 5) return 0;
    let res = 0;
    while(n>0){
         n /=5;
         res += Math.trunc(n)
    }
    return res;
 };

export default trailingZeroes;
