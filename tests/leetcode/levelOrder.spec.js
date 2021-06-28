import levelOrder from '../../src/leetcode/levelOrder';
import {generatorBinaryTree} from '../../utils';
describe('levelOrder:102. 二叉树的层序遍历', () => {

    const cases = [
        {
            inputs: generatorBinaryTree([3,9,20,null,null,15,7]),
            result: [
                [3],
                [9,20],
                [15,7]
              ],
        },
        {
            inputs:generatorBinaryTree([]),
            result:[]
        }
    ];

    test.each(cases)(`levelOrder:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(levelOrder(inputs)).toEqual(result)
    })
});
