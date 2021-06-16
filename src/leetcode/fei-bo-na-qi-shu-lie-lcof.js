/**
 * 剑指 Offer 10- I. 斐波那契数列
 * @link: https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 * @param {number} n
 * @return {number}
 **/ 
 var fib = function(n) {
    let a = 0;
    let b = 1;
    for(let i=0;i<n;i++){
        [a,b]=[b,(a+b)%1000000007];
    }
    return a;
};

export default fib;
