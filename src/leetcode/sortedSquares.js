/**
 * 977. 有序数组的平方
 * @link: https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 * @param {number[]} nums
 * @return {number[]}
 */ 
 var sortedSquares = function(nums) {
    let len = nums.length-1;
    let res = []
    for(let i=0,j=len,pos=len;i<=j;){
        if(nums[i]*nums[i]>nums[j]*nums[j]){
            res[pos] = nums[i]*nums[i];
            i++
        }else{
            res[pos] = nums[j]*nums[j];
            j--;
        }
        pos--;
    }
    return res;
};

export default sortedSquares;
