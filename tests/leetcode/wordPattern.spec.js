import wordPattern from '../../src/leetcode/wordPattern';

describe('wordPattern:290. 单词规律', () => {

    const cases = [
        {
            inputs: ["abba","dog cat cat dog"],
            result: true,
        },
        {
            inputs: ["abba","dog cat cat fish"],
            result: false,
        },
        {
            inputs: ["aaaa","dog cat cat dog"],
            result: false,
        },
        {
            inputs: ["abba","dog dog dog dog"],
            result: false,
        },
    ];

    test.each(cases)(`wordPattern:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(wordPattern(...inputs)).toEqual(result)
    })
});
