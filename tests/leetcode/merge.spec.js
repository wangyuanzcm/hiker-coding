import merge from '../../src/leetcode/merge';

describe('merge:面试题 10.01. 合并排序的数组', () => {

    const cases = [
        {
            inputs: [[1,2,3,0,0,0],3,[2,5,6],3],
            result: [1,2,2,3,5,6],
        },
    ];

    test.each(cases)(`merge:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        merge(...inputs)
        expect(inputs[0]).toEqual(result)
    })
});
