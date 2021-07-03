/**
 * 判断一个数是否是素数
 * @link: https://blog.csdn.net/Snow_Me/article/details/52588819
 * @param {*} params
 */ 
const isPrime = (n) =>{
    for(let i=2;i*i<n;i++){
        if(n%i === 0) return false;
    }
    return true;
};

export default isPrime;
