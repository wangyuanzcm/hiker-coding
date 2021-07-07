import peakIndexInMountainArray from '../../src/leetcode/peakIndexInMountainArray';

describe('peakIndexInMountainArray:852. 山脉数组的峰顶索引', () => {

    const cases = [
        {
            inputs: [0,1,0],
            result: 1,
        },
        {
            inputs: [0,2,1,0],
            result: 1,
        },
        {
            inputs:  [0,10,5,2],
            result: 1,
        },
        {
            inputs: [3,4,5,1],
            result: 2,
        },
        {
            inputs: [24,69,100,99,79,78,67,36,26,19],
            result: 2,
        },
    ];

    test.each(cases)(`peakIndexInMountainArray:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(peakIndexInMountainArray(...inputs)).toEqual(result)
    })
});
