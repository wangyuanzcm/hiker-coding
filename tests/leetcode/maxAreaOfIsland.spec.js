import maxAreaOfIsland from '../../src/leetcode/maxAreaOfIsland';

describe('maxAreaOfIsland:695. 岛屿的最大面积', () => {

    const cases = [
        {
            inputs: [],
            result: '',
        },
    ];

    test.each(cases)(`maxAreaOfIsland:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(maxAreaOfIsland(...inputs)).toEqual(result)
    })
});
