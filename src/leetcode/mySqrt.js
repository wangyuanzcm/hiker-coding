/**
 * 69. x 的平方根
 * @link: https://leetcode-cn.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 *  */ 
 var mySqrt = function(x) {
    if(x===0) return 0;
    let l = 0;
    let r = x;
    while(l<=r){
        let mid = (l+r)>>1
        if(mid*mid===x){
            return mid;
        }
        if(mid*mid<x){
            l=mid+1;
        }else{
            r=mid-1;
        }
    }
    return r;
};
export default mySqrt;
