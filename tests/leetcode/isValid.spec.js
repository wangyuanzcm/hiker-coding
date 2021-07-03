import isValid from '../../src/leetcode/isValid';

describe('isValid:20. 有效的括号', () => {

    const cases = [
        {
            inputs: "()",
            result: true,
        },
        {
            inputs: "()[]{}",
            result: true,
        },
        {
            inputs: "(]",
            result: false,
        },
        {
            inputs: "([)]",
            result: false,
        },
    ];

    test.each(cases)(`isValid:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(isValid(inputs)).toEqual(result)
    })
});
