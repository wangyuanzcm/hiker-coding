import setZeroes from '../../src/leetcode/setZeroes';

describe('setZeroes:若M × N矩阵中某个元素为0，则将其所在的行与列清零。', () => {

    const cases = [
        {
            inputs: [[1,1,1],[1,0,1],[1,1,1]],
            result: [[1,0,1],[0,0,0],[1,0,1]],
        },
        {
            inputs: [[0,1,2,0],[3,4,5,2],[1,3,1,5]],
            result: [[0,0,0,0],[0,4,5,0],[0,3,1,0]],
        },
    ];

    test.each(cases)(`setZeroes:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        setZeroes(inputs)
        expect(inputs).toEqual(result)
    })
});
