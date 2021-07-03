/**
 * 1. 两数之和
 * @link: https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */ 
 var twoSum = function(nums, target) {
    let hash = new Map()
    for(let i=0;i<nums.length;i++){
        if(hash.has(target-nums[i])){
            return [i,hash.get(target-nums[i])]
        }
        hash.set(nums[i],i)
    }
};

export default twoSum;
