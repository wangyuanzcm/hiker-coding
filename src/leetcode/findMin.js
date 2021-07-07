/**
 * 153. 寻找旋转排序数组中的最小值
 * @link: https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/submissions/
 * @param {number[]} nums
 * @return {number}
 */ 
 var findMin = function(nums) {
    let l = 0;
    let r = nums.length-1;
    while(l<r){
        let mid = l+Math.floor((r-l)/2);
        if(nums[mid]<nums[r]){
            r=mid;
        }else{
            l=mid+1;
        }
    }
    return nums[l];
};

export default findMin;
