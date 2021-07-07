/**
 * 922. 按奇偶排序数组 II
 * @link: https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * @param {number[]} nums
 * @return {number[]}
 */ 
 var sortArrayByParityII = function(nums) {
    let j = 1;
    for(let i=0;i<nums.length;i+=2){
        if(nums[i]%2 === 1){
            while(nums[j] %2 === 1){
                j+=2;
            }
            [nums[i],nums[j]] = [nums[j],nums[i]]
        }
    }
    return nums;
};

export default sortArrayByParityII;
