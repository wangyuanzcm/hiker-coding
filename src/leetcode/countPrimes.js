/**
 * 204. 计数质数
 * @link: https://leetcode-cn.com/problems/count-primes/
 * @param {number} n
 * @return {number}
 */ 
 var countPrimes = function(n) {
    let isPrime = new Array(n).fill(1);
    let res = 0;
    for(let i=2;i<n;i++){
        if(isPrime[i]){
            res++;
            for(let j=i*i;j<n;j+=i){
                isPrime[j] = 0;
            }
        }
    }
    return res;
};


export default countPrimes;
