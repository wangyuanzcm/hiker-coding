import trailingZeroes from '../../src/leetcode/trailingZeroes';

describe('trailingZeroes:172. 阶乘后的零', () => {

    const cases = [
        {
            inputs: [3],
            result: 0,
        },
        {
            inputs: [5],
            result: 1,
        },
        {
            inputs: [30],
            result: 7,
        },
    ];

    test.each(cases)(`trailingZeroes:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(trailingZeroes(...inputs)).toEqual(result)
    })
});
