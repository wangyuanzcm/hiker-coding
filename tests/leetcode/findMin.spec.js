import findMin from '../../src/leetcode/findMin';

describe('findMin:153. 寻找旋转排序数组中的最小值', () => {

    const cases = [
        {
            inputs: [3,4,5,1,2],
            result: 1,
        },
        {
            inputs: [4,5,6,7,0,1,2],
            result: 0,
        },
        {
            inputs: [11,13,15,17],
            result: 11,
        },
    ];

    test.each(cases)(`findMin:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(findMin(inputs)).toEqual(result)
    })
});
