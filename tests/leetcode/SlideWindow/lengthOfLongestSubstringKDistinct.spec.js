import lengthOfLongestSubstringKDistinct from '../../../src/leetcode/SlideWindow/lengthOfLongestSubstringKDistinct';

describe('lengthOfLongestSubstringKDistinct:340. 至多包含 K 个不同字符的最长子串', () => {

    const cases = [
        {
            inputs: ["eceba",2],
            result: 3,
        },
        {
            inputs: ["aa",1],
            result: 2,
        },
    ];

    test.each(cases)(`lengthOfLongestSubstringKDistinct:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(lengthOfLongestSubstringKDistinct(...inputs)).toEqual(result)
    })
});
