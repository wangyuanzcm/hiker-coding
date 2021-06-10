/**
 * 若M × N矩阵中某个元素为0，则将其所在的行与列清零。
 * @link: https://leetcode-cn.com/problems/set-matrix-zeroes/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */ 
const setZeroes = (matrix) =>{
    let m = matrix.length;
    let n = matrix[0].length;
    let row = new Array(m).fill(false);
    let col = new Array(n).fill(false);
    for(let i = 0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]=== 0){
                row[i] = true;
                col[j] = true;
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(row[i]||col[j]){
                matrix[i][j] = 0
            }
        }
    }
};

export default setZeroes;
