import swapPairs from '../../../src/leetcode/LinkedList/swapPairs';
import {generatorSinglyLinkedList} from '../../../utils';

describe('swapPairs:24. 两两交换链表中的节点', () => {

    const cases = [
        {
            inputs: [generatorSinglyLinkedList([1,2,3,4])],
            result: generatorSinglyLinkedList([2,1,4,3]),
        },
        {
            inputs: [generatorSinglyLinkedList([])],
            result: generatorSinglyLinkedList([]),
        },
        {
            inputs: [generatorSinglyLinkedList([1])],
            result: generatorSinglyLinkedList([1]),
        },
    ];

    test.each(cases)(`swapPairs:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(swapPairs(...inputs)).toEqual(result)
    })
});
