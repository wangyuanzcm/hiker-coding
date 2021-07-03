import countPrimes from '../../src/leetcode/countPrimes';

describe('countPrimes:204. 计数质数', () => {

    const cases = [
        {
            inputs: [10],
            result: 4,
        },
        {
            inputs: [0],
            result: 0,
        },
        {
            inputs: [1],
            result: 0,
        },
    ];

    test.each(cases)(`countPrimes:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(countPrimes(...inputs)).toEqual(result)
    })
});
