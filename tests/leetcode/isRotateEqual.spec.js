import isRotateEqual from '../../src/leetcode/isRotateEqual';

describe('isRotateEqual:算法：给你一个纯数字字符串，判断旋转180度之后是否和自己相等', () => {
    const cases = [
        {
            inputs: ['121'],
            result: false,
        },
        {
            inputs: ['1691'],
            result: true,
        },
        {
            inputs: ['1991'],
            result: false,
        },
    ];

    test.each(cases)(`isRotateEqual:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(isRotateEqual(...inputs)).toEqual(result)
    })
});
