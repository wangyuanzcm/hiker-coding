import getPrimeFactor from '../../src/leetcode/getPrimeFactor';

describe('getPrimeFactor:获取数字的质数组合数组', () => {

    const cases = [
        {
            inputs: [10],
            result: [2,5],
        },
        {
            inputs: [20],
            result: [2,2,5],
        },
    ];

    test.each(cases)(`getPrimeFactor:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(getPrimeFactor(...inputs)).toEqual(result)
    })
});
