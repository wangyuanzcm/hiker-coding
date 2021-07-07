/**
 * 74. 搜索二维矩阵
 * @link: https://leetcode-cn.com/problems/search-a-2d-matrix/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */ 
 var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let l = 0;
    let r = m*n-1;
    while(l<=r){
        let mid = l+Math.floor((r-l)/2);
        let x = matrix[Math.floor(mid/n)][mid%n];
        if(x<target){
            l=mid+1;
        }else if(x>target){
            r=mid-1;
        }else{
            return true;
        }
    }
    return false;
};

export default searchMatrix;
