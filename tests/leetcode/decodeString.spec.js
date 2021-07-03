import decodeString from '../../src/leetcode/decodeString';

describe('decodeString:394. 字符串解码', () => {

    const cases = [
        {
            inputs: ["3[a]2[bc]"],
            result: "aaabcbc",
        },
        {
            inputs: ["3[a2[c]]"],
            result: "accaccacc",
        },
        {
            inputs: ["2[abc]3[cd]ef"],
            result: "abcabccdcdcdef",
        },
        {
            inputs: [ "abc3[cd]xyz"],
            result: "abccdcdcdxyz",
        },
    ];

    test.each(cases)(`decodeString:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(decodeString(...inputs)).toEqual(result)
    })
});
