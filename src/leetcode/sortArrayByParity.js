/**
 * 905. 按奇偶排序数组
 * @link: https://leetcode-cn.com/problems/sort-array-by-parity/
 * @param {number[]} nums
 * @return {number[]}
 */ 
 var sortArrayByParity = function(nums) {
    let l = 0;
    let r = nums.length-1;
    while(l<r){
        if(nums[l]%2 > nums[r]%2){
            [nums[l],nums[r]] = [nums[r],nums[l]];
        }
        if(nums[l]%2 === 0) l++;
        if(nums[r]%2 === 1) r--; 
    }
    return nums;
 };

export default sortArrayByParity;
