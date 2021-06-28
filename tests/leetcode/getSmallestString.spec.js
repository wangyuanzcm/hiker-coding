import getSmallestString from '../../src/leetcode/getSmallestString';

describe('getSmallestString:1663. 具有给定数值的最小字符串', () => {

    const cases = [
        {
            inputs: [3,27],
            result: 'aay',
        },
        {
            inputs: [5,73],
            result: 'aaszz',
        },
    ];

    test.each(cases)(`getSmallestString:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(getSmallestString(...inputs)).toEqual(result)
    })
});
