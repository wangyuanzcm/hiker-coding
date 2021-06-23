/**
 * 判断牌面是否有顺子
 * 5张牌，牌面数字连续即为顺子
 * 四种花色一共52张牌，♠️A-K为0-12，♥️A-K为13-25，♣️A-k为26-38，♦️A-K为39-51。
 * 任意7张牌存在数组中，实现一共judge函数，返回true或false判断是否有顺子（5张连续即可），
 * 顺子：
 * @link: 相关题目 https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/
 * @param {number[]} nums
 * @return {boolean} 
 **/ 
const judge = (nums) =>{
    if(!nums.length||nums.length<5) return false;
    let newNums = nums.map(item=>item%13).sort((a,b)=>a-b);
    let repeat = [...new Set(newNums)];
    if(repeat.length<5) return false;
    for(let i=0;i<repeat.length;i++) {
        let l = i,r=i+4;
        if(repeat[r]-repeat[l] === 4){
            return true;
        }
    }
    return false;
};

export default judge;
