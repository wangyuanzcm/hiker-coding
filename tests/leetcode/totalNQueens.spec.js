import totalNQueens from '../../src/leetcode/totalNQueens';

describe('totalNQueens:52. N皇后 II', () => {

    const cases = [
        {
            inputs: [4],
            result: 2,
        },
        {
            inputs: [1],
            result: 1,
        },
    ];

    test.each(cases)(`totalNQueens:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(totalNQueens(...inputs)).toEqual(result)
    })
});
