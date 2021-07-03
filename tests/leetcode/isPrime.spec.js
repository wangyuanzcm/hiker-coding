import isPrime from '../../src/leetcode/isPrime';

describe('isPrime:判断一个数是否是素数', () => {

    const cases = [
        {
            inputs: [34],
            result: false,
        },
        {
            inputs: [19],
            result: true,
        },
    ];

    test.each(cases)(`isPrime:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(isPrime(...inputs)).toEqual(result)
    })
});
