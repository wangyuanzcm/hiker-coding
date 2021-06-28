/**
 * 在未排序的数组中找到第 k 个最大的元素。
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 这道题最简单的是使用数组的sort方法，但是实际上考察的是快速排序和堆排序，如果使用sort方法的话就要准备好堆排序和快速排序的原理分析
 * @link: https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */ 
 var findKthLargest = function(nums, k) {
    let newNums = nums.sort((a,b)=>b-a);
    return newNums[k-1];
};

export default findKthLargest;
