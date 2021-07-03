import longestCommonSubsequence from '../../src/leetcode/longestCommonSubsequence';

describe('longestCommonSubsequence:1143. 最长公共子序列', () => {

    const cases = [
        {
            inputs: ["abcde","ace" ],
            result: 3,
        },
        {
            inputs: [ "abc", "abc" ],
            result: 3,
        },
        {
            inputs: ["abc","def" ],
            result: 0,
        },
    ];

    test.each(cases)(`longestCommonSubsequence:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(longestCommonSubsequence(...inputs)).toEqual(result)
    })
});
