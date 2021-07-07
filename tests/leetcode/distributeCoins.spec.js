import distributeCoins from '../../src/leetcode/distributeCoins';
import generatorBinaryTree from '../../utils';

describe('distributeCoins:979. 在二叉树中分配硬币', () => {

    const cases = [
        {
            inputs: [generatorBinaryTree([3,0,0])],
            result: 2,
        },
        {
            inputs: [generatorBinaryTree([0,3,0])],
            result: 3,
        },
        {
            inputs: [generatorBinaryTree([1,0,2])],
            result: 2,
        },
        {
            inputs: [generatorBinaryTree([1,0,0,null,3])],
            result: 4,
        },
    ];

    test.each(cases)(`distributeCoins:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(distributeCoins(...inputs)).toEqual(result)
    })
});
