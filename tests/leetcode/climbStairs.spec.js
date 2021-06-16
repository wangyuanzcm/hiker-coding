import climbStairs from '../../src/leetcode/climbStairs';

describe('climbStairs:70. 爬楼梯', () => {

    const cases = [
        {
            inputs: 2,
            result: 2,
        },
        {
            inputs: 3,
            result: 3,
        },
        {
            inputs: 22,
            result: 28657,
        },
        {
            inputs: 45,
            result: 1836311903,
        },
    ];

    test.each(cases)(`climbStairs:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(climbStairs(inputs)).toEqual(result)
    })
});
