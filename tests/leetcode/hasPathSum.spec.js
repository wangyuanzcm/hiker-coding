import hasPathSum from '../../src/leetcode/hasPathSum';
import generatorBinaryTree from '../../utils';

describe('hasPathSum:112. 路径总和', () => {

    const cases = [
        {
            inputs: [generatorBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22],
            result: true,
        },
        {
            inputs: [generatorBinaryTree([1, 2, 3]), 5],
            result: false,
        },
        {
            inputs: [generatorBinaryTree([1, 2]), 0],
            result: false,
        },
    ];

    test.each(cases)(`hasPathSum:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(hasPathSum(...inputs)).toEqual(result)
    })
});
