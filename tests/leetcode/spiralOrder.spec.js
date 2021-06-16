import spiralOrder from '../../src/leetcode/spiralOrder';

describe('spiralOrder:剑指 Offer 29. 顺时针打印矩阵', () => {

    const cases = [
        {
            inputs: [[1,2,3],[4,5,6],[7,8,9]],
            result: [1,2,3,6,9,8,7,4,5],
        },
        {
            inputs: [[1,2,3,4],[5,6,7,8],[9,10,11,12]],
            result: [1,2,3,4,8,12,11,10,9,5,6,7],
        },
    ];

    test.each(cases)(`spiralOrder:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(spiralOrder(inputs)).toEqual(result)
    })
});
