import lengthOfLongestSubstringTwoDistinct from '../../../src/leetcode/SlideWindow/lengthOfLongestSubstringTwoDistinct';

describe('lengthOfLongestSubstringTwoDistinct:给定一个字符串 s ，找出 至多 包含两个不同字符的最长子串 t ，并返回该子串的长度。', () => {

    const cases = [
        {
            inputs: "eceba",
            result: 3,
        },
        {
            inputs: "ccaabbb",
            result: 5,
        },
        {
            inputs: "a",
            result: 1,
        },
    ];

    test.each(cases)(`lengthOfLongestSubstringTwoDistinct:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(lengthOfLongestSubstringTwoDistinct(inputs)).toEqual(result)
    })
});
