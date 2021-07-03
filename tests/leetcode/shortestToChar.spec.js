import shortestToChar from '../../src/leetcode/shortestToChar';

describe('shortestToChar:821. 字符的最短距离', () => {

    const cases = [
        {
            inputs: ["loveleetcode", "e"],
            result: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0],
        },
        {
            inputs: ["aaab", "b"],
            result: [3, 2, 1, 0],
        },
    ];

    test.each(cases)(`shortestToChar:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(shortestToChar(...inputs)).toEqual(result)
    })
});
