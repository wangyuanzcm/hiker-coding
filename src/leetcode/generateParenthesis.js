/**
 * 22. 括号生成
 * @link: https://leetcode-cn.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */ 
 var generateParenthesis = function(n) {
    let res = [];
    const DFS = (left,right,str)=>{
        if(left === n&&right === n) {
            res.push(str);
            return ;
        }
        if(left<right) return;
        if(left<n){
            DFS(left+1,right,str+'(')
        }
        if(right<n){
            DFS(left,right+1,str+')');
        }
    }
    DFS(0,0,'')
    return res;
};

export default generateParenthesis;
