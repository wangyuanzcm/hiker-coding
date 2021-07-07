/**
 * 154. 寻找旋转排序数组中的最小值 II
 * @link: https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * @param {number[]} nums
 * @return {number}
 */ 
 var findMinII = function(nums) {
    let l=0;
    let r = nums.length-1;
    while(l<r){
        let mid = l+Math.floor((r-l)/2);
        if(nums[mid]<nums[r]){
            r= mid;
        }else if (nums[mid]>nums[r]){
            l=mid+1
        }else {
            r-=1;
        }
    }
    return nums[l]
};

export default findMinII;
