import maxSubArray from '../../src/leetcode/maxSubArray';

describe('maxSubArray:剑指 Offer 42. 连续子数组的最大和', () => {

    const cases = [
        {
            inputs: [-2,1,-3,4,-1,2,1,-5,4],
            result: 6,
        },
    ];

    test.each(cases)(`maxSubArray:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(maxSubArray(inputs)).toEqual(result)
    })
});
