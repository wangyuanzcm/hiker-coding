import mySqrt from '../../src/leetcode/mySqrt';

describe('mySqrt:69. x 的平方根', () => {

    const cases = [
        {
            inputs: [4],
            result: 2,
        },
        {
            inputs: [8],
            result: 2,
        },
        {
            inputs: [9],
            result: 3,
        },
        {
            inputs: [0],
            result: 0,
        },
    ];

    test.each(cases)(`mySqrt:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(mySqrt(...inputs)).toEqual(result)
    })
});
