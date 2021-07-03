import invertTree from '../../src/leetcode/invertTree';
import {generatorBinaryTree} from '../../utils';
describe('invertTree:226. 翻转二叉树', () => {

    const cases = [
        {
            inputs: generatorBinaryTree([4,2,7,1,3,6,9]),
            result: generatorBinaryTree([4,7,2,9,6,3,1]),
        },
    ];

    test.each(cases)(`invertTree:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(invertTree(inputs)).toEqual(result)
    })
});
