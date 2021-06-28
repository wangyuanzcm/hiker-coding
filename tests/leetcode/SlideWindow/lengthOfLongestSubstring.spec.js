import lengthOfLongestSubstring from '../../../src/leetcode/SlideWindow/lengthOfLongestSubstring';

describe('lengthOfLongestSubstring:3. 无重复字符的最长子串', () => {

    const cases = [
        {
            inputs: "abcabcbb",
            result: 3,
        },
        {
            inputs: "bbbbb",
            result: 1,
        },
        {
            inputs: "pwwkew",
            result: 3,
        },
        {
            inputs: "",
            result: 0,
        },
    ];

    test.each(cases)(`lengthOfLongestSubstring:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(lengthOfLongestSubstring(inputs)).toEqual(result)
    })
});
