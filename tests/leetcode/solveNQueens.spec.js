import solveNQueens from '../../src/leetcode/solveNQueens';

describe('solveNQueens:51. N 皇后', () => {

    const cases = [
        {
            inputs: [4],
            result: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]],
        },
        {
            inputs: [1],
            result: [["Q"]],
        },
    ];

    test.each(cases)(`solveNQueens:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(solveNQueens(...inputs)).toEqual(result)
    })
});
