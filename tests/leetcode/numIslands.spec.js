import numIslands from '../../src/leetcode/numIslands';

describe('numIslands:200. 岛屿数量', () => {

    const cases = [
        {
            inputs: [
                ["1","1","1","1","0"],
                ["1","1","0","1","0"],
                ["1","1","0","0","0"],
                ["0","0","0","0","0"]
              ],
            result: 1,
        },
        {
            inputs: [
                ["1","1","0","0","0"],
                ["1","1","0","0","0"],
                ["0","0","1","0","0"],
                ["0","0","0","1","1"]
              ],
            result: 3,
        },
    ];

    test.each(cases)(`numIslands:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(numIslands(...inputs)).toEqual(result)
    })
});
