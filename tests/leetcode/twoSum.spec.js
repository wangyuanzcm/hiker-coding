import twoSum from '../../src/leetcode/twoSum';

describe('twoSum:1. 两数之和', () => {

    const cases = [
        {
            inputs: [[2,7,11,15],9],
            result: [0,1],
        },
        {
            inputs: [[3,2,4],6],
            result: [1,2],
        },
        {
            inputs: [[3,3],6],
            result: [0,1],
        },
    ];

    test.each(cases)(`twoSum:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(twoSum(...inputs).sort()).toEqual(result.sort())
    })
});
