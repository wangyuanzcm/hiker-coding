/**
 * 获取数字的质数组合数组
 * @link: 链接,引用文档等
 * @param {*} n
 */ 
const getPrimeFactor = (n) =>{
    let dp = new Array(n+1).fill(1);
    let primes = [];
    let res = [];
    for(let i=2;i<=n;i++){
        if(dp[i]){
            primes.push(i);
            for(let j=i*i;j<=n;j+=i){
                dp[j] = 0;
            }
        }
    }
    let i = 0;
    while(n!==1){
        if(n%primes[i] === 0){
            n /= primes[i];
            res.push(primes[i]);
        }else{
            i++;
        }
    }
    return res;
};

export default getPrimeFactor;
