/**
 * 1143. 最长公共子序列
 * @link: https://leetcode-cn.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */ 
 var longestCommonSubsequence = function(text1, text2) {
    let m=text1.length;
    let n=text2.length;
    const dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0));
    for(let i=1;i<=m;i++){
        const c1 = text1[i-1];
        for(let j=1;j<=n;j++){
            const c2 = text2[j-1];
            if(c1===c2){
                dp[i][j] = dp[i-1][j-1]+1;
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
};

export default longestCommonSubsequence;