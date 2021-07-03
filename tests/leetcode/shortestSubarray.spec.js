import shortestSubarray from '../../src/leetcode/shortestSubarray';

describe('shortestSubarray:862. 和至少为 K 的最短子数组', () => {

    const cases = [
        {
            inputs: [[1],1],
            result: 1,
        },
        {
            inputs: [[1,2],4],
            result: -1,
        },
        {
            inputs: [[2,-1,2],3],
            result: 3,
        },
    ];

    test.each(cases)(`shortestSubarray:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(shortestSubarray(...inputs)).toEqual(result)
    })
});
