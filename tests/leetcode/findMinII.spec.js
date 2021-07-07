import findMinII from '../../src/leetcode/findMinII';

describe('findMinII:154. 寻找旋转排序数组中的最小值 II', () => {

    const cases = [
        {
            inputs: [1,3,5],
            result: 1,
        },
        {
            inputs: [2,2,2,0,1],
            result: 0,
        },
    ];

    test.each(cases)(`findMinII:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(findMinII(inputs)).toEqual(result)
    })
});
