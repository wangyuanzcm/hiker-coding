import checkValidString from '../../src/leetcode/checkValidString';

describe('checkValidString:678. 有效的括号字符串', () => {

    const cases = [
        {
            inputs: "()",
            result: true,
        },
        {
            inputs: "(*)",
            result: true,
        },
        {
            inputs: "(*))",
            result: true,
        },
        {
            inputs: "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()",
            result: true,
        },
    ];

    test.each(cases)(`checkValidString:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(checkValidString(inputs)).toEqual(result)
    })
});
