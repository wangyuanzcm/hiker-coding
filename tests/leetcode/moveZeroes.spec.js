import moveZeroes from '../../src/leetcode/moveZeroes';

describe('moveZeroes:283. 移动零', () => {

    const cases = [
        {
            inputs: [0,1,0,3,12],
            result: [1,3,12,0,0],
        },
        {
            inputs: [1],
            result: [1],
        },
    ];

    test.each(cases)(`moveZeroes:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        moveZeroes(inputs)
        expect(inputs).toEqual(result)
    })
});
