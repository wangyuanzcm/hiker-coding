import isPalindrome from '../../src/leetcode/isPalindrome';

describe('isPalindrome:9. 回文数', () => {

    const cases = [
        {
            inputs: [121],
            result: true,
        },
        {
            inputs: [-121],
            result: false,
        },
        {
            inputs: [10],
            result: false,
        },
    ];

    test.each(cases)(`isPalindrome:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(isPalindrome(...inputs)).toEqual(result)
    })
});
