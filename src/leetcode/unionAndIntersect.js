/**
 * 两个有序整数数组，数组中可能会有重复数字，求两个数组的交集和并集，要求交集和并集中没有重复数字
 * @link: https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * @param {Array} nums1
 * @param {Array} nums2
 */
const unionAndIntersect = (nums1, nums2) => {
    const hash1 = Object.create(null);
    const hash2 = Object.create(null);
    const intersect = [];
    const union = [];
    nums1.forEach((item) => {
        if (hash1[item] === undefined) hash1[item] = item;
    })
    nums2.forEach((item) => {
        if (hash2[item] !== undefined) return;
        hash2[item] = item;
        if (hash1[item] !== undefined) {
            intersect.push(item);
        }
        union.push(item);
    })
    for (let item in hash1) {
        if (hash2[item] !== undefined) continue;
        union.push(hash1[item]);
    }
    return [union, intersect]
};

export default unionAndIntersect;
