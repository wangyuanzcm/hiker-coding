import {
    serialize,
    deserialize
} from '../../src/leetcode/serialize-and-deserialize-binary-tree';
import {generatorBinaryTree} from '../../utils';

function TreeNode(val, left, right) {
    this.val = (val === undefined ? '0' : String(val))
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
describe('serializeAndDeserializeBinaryTree:二叉树的序列化与反序列化', () => {
    const cases = [
        {
            inputs: [1,2,3,null,null,4,5],
            result: [1,2,3,null,null,4,5],
        },
        {
            inputs: [],
            result: [],
        },
        {
            inputs: [1],
            result: [1],
        },
        {
            inputs: [1,2],
            result: [1,2],
        },
    ];

    test.each(cases)(`serializeAndDeserializeBinaryTree:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        const root = generatorBinaryTree(inputs,TreeNode);
        expect(deserialize(serialize(root))).toEqual(generatorBinaryTree(result,TreeNode))
    })
});
