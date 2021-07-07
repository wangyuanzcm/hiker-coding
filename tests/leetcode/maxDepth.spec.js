import maxDepth from '../../src/leetcode/maxDepth';
import generatorBinaryTree from '../../utils';
describe('maxDepth:104. 二叉树的最大深度', () => {

    const cases = [
        {
            inputs: generatorBinaryTree([3,9,20,null,null,15,7]),
            result: 3,
        },
    ];

    test.each(cases)(`maxDepth:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(maxDepth(inputs)).toEqual(result)
    })
});
