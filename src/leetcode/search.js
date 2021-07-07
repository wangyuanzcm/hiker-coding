/**
 * 33. 搜索旋转排序数组
 * @link: https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!nums.length) return -1;
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1;
    }

    let l = 0;
    let len = nums.length;
    let r = len - 1;

    while (l <= r) {
        let mid = Math.trunc((l + r) / 2);
        if (nums[mid] === target) return mid;
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target <= nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[len - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};

export default search;
