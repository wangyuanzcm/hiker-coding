/**
 * 283. 移动零
 * @link: https://leetcode-cn.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            index++;
        }
    }
    return nums;
};

export default moveZeroes;
