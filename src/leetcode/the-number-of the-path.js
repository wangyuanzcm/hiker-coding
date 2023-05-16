// 币安2面面试题，再熟悉的IDE里写代码。

// 迷宫问题，迷宫被抽象成一个M*N的二维数组矩阵，如下：
// var matrix = 
//     [[0, 1, 0, 0, 0, 0]
//     [0, 1, 0, 1, 0, 0]
//     [0, 0, 0, 0, 0, 1]
//     [1, 1, 0, 0, 0, 0]
//     [1, 1, 0, 0, 0, 0]
//     [1, 1, 0, 0, 0, 0]]

// 上面二维数组中，取左上角为起点，右下角为终点，每个点有上下左右一共4个方向可以走，0表示通路可以通过，1表示障碍物不能通过，求从起点到终点共有多少种走法，并找出最优解法。
// 获取迷宫的所有路径
const getPathsNumber = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let res = 0;
    const dfs = (row,col)=>{
        if(row === rows-1&&col === cols-1){
            res++;
            return;
        }
        if(row<0||row>=rows||col<0||col>=cols){
            return ;
        }
        if(matrix[row][col]===1){
            return ;
        }
        matrix[row][col] = 1;
        dfs(row-1,col);
        dfs(row+1,col);
        dfs(row,col-1);
        dfs(row,col+1);
        matrix[row][col] = 0;
    }
     dfs(0,0,0);
     return res;
}

const matrix0 = [
    [0,1],
    [0,0]
]
const matrix1 = [
    [1,0,1],
    [0,1,0],
    [0,0,1]
]
const matrix = [[0, 1, 0, 0, 0, 0],
[0, 1, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 1],
[1, 1, 0, 0, 0, 0],
[1, 1, 0, 0, 0, 0],
[1, 1, 0, 0, 0, 0]];
console.log(getPathsNumber(matrix0));
console.log(getPathsNumber(matrix1));
console.log(getPathsNumber(matrix));