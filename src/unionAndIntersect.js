/**
 * 两个有序整数数组，数组中可能会有重复数字，求两个数组的交集和并集，要求交集和并集中没有重复数字
 * @link: https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * @param {Array} arr1
 * @param {Array} arr2
 */
var unionAndIntersect = function (arr1, arr2) {
    const union = [...new Set([...arr1, ...arr2])];
    let len1 = arr1.length, len2 = arr2.length;
    let l = 0, r = 0;
    const intersect = [];
    while (l < len1 && r < len2) {
        const num1 = arr1[l];
        const num2 = arr2[r];
        if (num1 === num2) {
            if (!intersect.length || num1 != intersect[intersect.length - 1]) {
                intersect.push(num1);
            }
            l++;
            r++;
        } else if (num1 > num2) {
            r++;
        } else {
            l++;
        }
    }
    return [union, intersect]
};

module.exports = unionAndIntersect;
