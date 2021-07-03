/**
 * 212. 单词搜索 II
 * @link: https://leetcode-cn.com/problems/word-search-ii/
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */ 
 var findWords = function(board, words) {
    let trie = {};
    let res = [];
    let row = board.length;
    let col = board[0].length;

    //生成前缀树
    for(let w of words){
        let t = trie;
        for(let c of w){
            if(!t[c]){
                t[c] = {};
            }
            t=t[c];
        }
        t.word = w;
    }

    //遍历DFS
    const DFS=(i,j,trie)=>{
        if(trie.word){
             res.push(trie.word);
            trie.word = '';
        }
        if(i<0||j<0||i>=row||j>=col) return;
        if(!trie[board[i][j]]) return;
        let char = board[i][j];

        board[i][j] = '';
        DFS(i-1,j,trie[char]);
        DFS(i+1,j,trie[char]);
        DFS(i,j-1,trie[char]);
        DFS(i,j+1,trie[char]);
        board[i][j] = char;
    }
    for(let i =0;i<row;i++){
        for(let j=0;j<col;j++){
            DFS(i,j,trie);
        }
    }
    return res;
};



export default findWords;
