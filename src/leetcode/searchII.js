/**
 * 81. 搜索旋转排序数组 II
 * @link: https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */ 
const searchII = (nums, target) =>{
    if(nums.length === 0) return false;
    if(nums.length === 1){
        return nums[0] === target;
    }
    let len = nums.length;
    let l = 0;
    let r = len-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] === target) return true;
        if(nums[mid] === nums[l]&&nums[mid] === nums[r]){
            l++;
            r--;
        }else if(nums[mid]>=nums[l]){
            if(nums[l]<=target&&target<nums[mid]){
                r=mid-1;
            }else{
                l=mid+1;
            }
        }else{
            if(target<=nums[r]&&nums[mid]<target){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }
    }
    return false;
};

export default searchII;
