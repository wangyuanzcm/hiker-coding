import findTheDifference from '../../src/leetcode/findTheDifference';

describe('findTheDifference:389. 找不同', () => {

    const cases = [
        {
            inputs: ["abcd", "abcde"],
            result: 'e',
        },
        {
            inputs: ["", "y"],
            result: 'y',
        },
        {
            inputs: ["a", "aa"],
            result: 'a',
        },
        {
            inputs: ["ae", "aea"],
            result: 'a',
        },
    ];

    test.each(cases)(`findTheDifference:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(findTheDifference(...inputs)).toEqual(result)
    })
});
