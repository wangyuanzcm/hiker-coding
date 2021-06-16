import fib from '../../src/leetcode/fei-bo-na-qi-shu-lie-lcof';

describe('feiBoNaQiShuLieLcof:剑指 Offer 10- I. 斐波那契数列', () => {

    const cases = [
        {
            inputs: 2,
            result: 1,
        },
        {
            inputs: 5,
            result: 5,
        },
        {
            inputs: 45,
            result: 134903163,
        },
    ];

    test.each(cases)(`feiBoNaQiShuLieLcof:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(fib(inputs)).toEqual(result)
    })
});
