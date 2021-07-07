/**
 * 51. N 皇后
 * @link: https://leetcode-cn.com/problems/n-queens/
 * @param {number} n
 * @return {string[][]}
 */ 
 var solveNQueens = function(n) {
    let res = [];
    let chessBoard = new Array(n).fill(0).map(()=>new Array(n).fill('.'));
    function isValid(row,col,chessBoard,n){
        for(let i=0;i<row;i++){
            if(chessBoard[i][col] === 'Q'){
                return false;
            }
        }
        for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
            if(chessBoard[i][j] === 'Q'){
                return false;
            }
        }
        for(let i=row-1,j=col+1;i>=0&&j<n;i--,j++){
            if(chessBoard[i][j] === 'Q'){
                return false;
            }
        }
        return true;
    }
    const transformChessBoard=(chessBoard)=>{
        return chessBoard.map(item=>{
            return item.reduce((pre,cur)=>{
                return pre+cur;
            },'');
        })
    }
    const DFS=(row,chessBoard)=>{
        if(row == n){
            res.push(transformChessBoard(chessBoard));
            return;
        }
        for(let col =0;col<n;col++){
            if(isValid(row,col,chessBoard,n)){
                chessBoard[row][col] = 'Q';
                DFS(row+1,chessBoard);
                chessBoard[row][col] = '.';
            }
        }
    }
    DFS(0,chessBoard);
    return res;
};


export default solveNQueens;
