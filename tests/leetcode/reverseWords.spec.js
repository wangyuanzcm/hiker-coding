import reverseWords from '../../src/leetcode/reverseWords';

describe('reverseWords:剑指 Offer 58 - I. 翻转单词顺序', () => {

    const cases = [
        {
            inputs: "the sky is blue",
            result: "blue is sky the",
        },
        {
            inputs: "  hello world!  ",
            result:  "world! hello",
        },
        {
            inputs: "a good   example",
            result: "example good a",
        },
    ];

    test.each(cases)(`reverseWords:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(reverseWords(inputs)).toEqual(result)
    })
});
