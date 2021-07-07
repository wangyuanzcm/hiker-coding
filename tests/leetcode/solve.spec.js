import solve from '../../src/leetcode/solve';

describe('solve:130. 被围绕的区域', () => {

    const cases = [
        {
            inputs: [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]],
            result: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]],
        },
    ];

    test.each(cases)(`solve:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        solve(inputs)
        expect(inputs).toEqual(result)
    })
});
