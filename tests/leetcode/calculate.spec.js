import calculate from '../../src/leetcode/calculate';

describe('calculate:基本计算器 II', () => {

    const cases = [
        {
            inputs: "3+2*2",
            result: 7,
        },
        {
            inputs: " 3/2 ",
            result: 1,
        },
        {
            inputs: " 3+5 / 2 ",
            result: 5,
        },
    ];

    test.each(cases)(`calculate:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(calculate(inputs)).toEqual(result)
    })
});
