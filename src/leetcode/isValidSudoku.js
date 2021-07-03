/**
 * 36. 有效的数独
 * @link: https://leetcode-cn.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */ 
 var isValidSudoku = function(board) {
    let rSet = new Set();
    let cSet = new Set();
    let sSet = new Set();
    for(let i=0;i<9;i++){
        rSet.clear();
        cSet.clear();
        sSet.clear();
       for(let j=0;j<9;j++){
           let rChar = board[i][j];
           let cChar = board[j][i];
           let sChar = board[Math.floor(i/3)*3+Math.floor(j/3)][(i%3)*3+j%3];
           if(rChar!=='.'){
               if(rSet.has(rChar)){
                   return false;
               }else{
                   rSet.add(rChar);
               }
           }
            if(cChar!=='.'){
               if(cSet.has(cChar)){
                   return false;
               }else{
                   cSet.add(cChar);
               }
           }
             if(sChar!=='.'){
               if(sSet.has(sChar)){
                   return false;
               }else{
                   sSet.add(sChar);
               }
           }
       }
    }
    return true;
};

export default isValidSudoku;
