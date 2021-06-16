/**
 * 剑指 Offer 29. 顺时针打印矩阵
 * @link: https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
    if (!matrix.length || !matrix[0].length) return [];
    let row = matrix.length;
    let col = matrix[0].length;
    let left = 0;
    let right = col - 1;
    let top = 0;
    let bottom = row - 1;
    let res = []
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        for (let j = top + 1; j <= bottom; j++) {
            res.push(matrix[j][right]);
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i > left; i--) {
                res.push(matrix[bottom][i]);
            }
            for (let i = bottom; i > top; i--) {
                res.push(matrix[i][left]);
            }
        }
        left++;
        top++;
        right--;
        bottom--;
    }
    return res;
};

export default spiralOrder;
