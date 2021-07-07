/**
 * 130. 被围绕的区域
 * @link: https://leetcode-cn.com/problems/surrounded-regions/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */ 
 var solve = function(board) {
    let m = board.length;
    let n = board[0].length;
    const DFS = (i,j)=>{
        if(i<0||j<0||i>=m||j>=n) return;
        if(board[i][j] !== 'O') return;
        board[i][j] = 'NO';
        DFS(i,j+1);
        DFS(i,j-1);
        DFS(i+1,j);
        DFS(i-1,j);
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i==0||j==0||i==m-1||j==n-1){
                if(board[i][j] === "O") DFS(i,j);
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
           if(board[i][j] === 'NO') {
               board[i][j] = 'O';
           }else{
               board[i][j] = 'X';
           }
        }
    }
    return board;
};

export default solve;
