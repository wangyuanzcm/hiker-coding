/**
 * 415. 字符串相加
 * @link: https://leetcode-cn.com/problems/add-strings/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */ 
 var addStrings = function(num1, num2) {
    let i = num1.length-1;
    let j = num2.length-1;
    let temp = 0;
    let res = []
   while(i>=0||j>=0||temp!=0){
       let m= i>=0?num1.charAt(i)-'0':0;
       let n = j>=0?num2.charAt(j)-'0':0;
       let sum = m+n+temp;
        res.push(sum%10);
        temp = Math.floor(sum/10);
        i-=1;
        j-=1;
        console.log(res,'res',i,j)
   }
    return res.reverse().join('');
};

export default addStrings;
