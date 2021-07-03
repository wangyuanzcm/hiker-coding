/**
 * 剑指 Offer 42. 连续子数组的最大和
 * @link: https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * @param {number[]} nums
 * @return {number}
 */ 
 var maxSubArray = function(nums) {
    let res = nums[0];
    for(let i=1;i<nums.length;i++){
        nums[i] +=Math.max(nums[i-1],0);
        res = Math.max(res,nums[i]);
    }
    return res;
};


export default maxSubArray;
