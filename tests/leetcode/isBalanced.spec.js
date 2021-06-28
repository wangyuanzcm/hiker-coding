import isBalanced from '../../src/leetcode/isBalanced';
import {generatorBinaryTree} from '../../utils';

describe('isBalanced:输入一棵二叉树的根节点，判断该树是不是平衡二叉树', () => {

    const cases = [
        {
            inputs: generatorBinaryTree([3,9,20,null,null,15,7]),
            result: true,
        },
        {
            inputs: generatorBinaryTree([1,2,2,3,3,null,null,4,4]),
            result: false,
        },
    ];

    test.each(cases)(`isBalanced:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(isBalanced(inputs)).toEqual(result)
    })
});
