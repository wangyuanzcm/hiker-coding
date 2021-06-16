import searchNode from '../../src/leetcode/searchNode.js';

import {generatorBinaryTree} from '../../utils';

describe('searchNode:寻找二叉树上从根结点到给定结点的路径', () => {

    const cases = [
        {
            inputs: [generatorBinaryTree([4,2,7,1,3]),4],
            result: [4],
        },
        {
            inputs: [generatorBinaryTree([4,2,7,1,3]),3],
            result: [4,2,3],
        },
    ];

    test.each(cases)(`searchNode:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(searchNode(...inputs)).toEqual(result)
    })
});
