/**
 * 887. 鸡蛋掉落
 * @link: https://leetcode-cn.com/problems/super-egg-drop/
 * @param {number} k
 * @param {number} n
 * @return {number}
 *  */ 
 var superEggDrop = function(k, n) {
    let calF = (k,t)=>{
        if(t===1||k===1) return t+1;
        return calF(k-1,t-1)+calF(k,t-1);
    }
    let T = 1;
    while(calF(k,T)<n+1) T++;
    return T;
};


export default superEggDrop;
