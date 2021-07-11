/**
 * 37. 解数独
 * @link: https://leetcode-cn.com/problems/sudoku-solver/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */ 
 var solveSudoku = function(board) {
    let m = board.length;
    let n = board[0].length;
    const isValid = (row,col,str,board)=>{
        for(let i=0;i<m;i++){
            if(board[row][i] === str){
                return false
            }
        }
        for(let j=0;j<n;j++){
            if(board[j][col] === str){
                return false;
            }
        }
        let startRow = Math.floor(row/3)*3;
        let startCol = Math.floor(col/3)*3;
        for(let i=startRow;i<startRow+3;i++){
            for(let j = startCol;j<startCol+3;j++){
                if(board[i][j] === str){
                    return false;
                }
            }
        }
        return true;
    }
    const DFS=(board,i,j)=>{
        if(j==n){
            return DFS(board,i+1,0);
        }
        if(i==m){
            return true
        }
        if(board[i][j]!=='.'){
            return DFS(board,i,j+1);
        }
        for(let val=1;val<=9;val++){
            if(!isValid(i,j,val.toString(),board)){
                continue;
            }
            board[i][j] = val.toString();
            if(DFS(board,i,j+1)){
                return true;
            }
            board[i][j] = '.';
        }
        return false;
    }
    if(DFS(board,0,0)){
        return board;
    }
};

export default solveSudoku;
