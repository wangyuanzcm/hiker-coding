import pathSum from '../../src/leetcode/pathSum';
import { generatorBinaryTree } from '../../utils'

describe('pathSum:剑指 Offer 34. 二叉树中和为某一值的路径', () => {

    const cases = [
        {
            inputs: [generatorBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22],
            result: [
                [5, 4, 11, 2],
                [5, 8, 4, 5]
            ],
        },
    ];

    test.each(cases)(`pathSum:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(pathSum(...inputs)).toEqual(result)
    })
});
