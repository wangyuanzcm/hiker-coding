/**
 * 695. 岛屿的最大面积
 * @link: https://leetcode-cn.com/problems/max-area-of-island/
 * @param {number[][]} grid
 * @return {number}
 */ 
 var maxAreaOfIsland = function(grid) {
    if(!grid.length) return 0;
    let m = grid.length;
    let n = grid[0].length;
    let max = 0;
    const DFS = (i,j) =>{
        if(i<0||j<0||i>=m||j>=n) return 0;
        if(!grid[i][j]) return 0;
        let s = 1;
        grid[i][j] = 0;
        s+= DFS(i+1,j);
        s+= DFS(i-1,j);
        s+= DFS(i,j+1);
        s+= DFS(i,j-1);
        return s;
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] === 1){
                let s = DFS(i,j);
                max = Math.max(s,max);
            }
        }
    }
    return max;
};

export default maxAreaOfIsland;
