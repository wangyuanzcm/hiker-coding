import mergeTwoLists from '../../../src/leetcode/LinkedList/mergeTwoLists';
import {generatorSinglyLinkedList} from '../../../utils';

describe('mergeTwoLists:21. 合并两个有序链表', () => {

    const cases = [
        {
            inputs: [generatorSinglyLinkedList([1,2,4]),generatorSinglyLinkedList([1,3,4])],
            result: generatorSinglyLinkedList([1,1,2,3,4,4]),
        },
        {
            inputs: [generatorSinglyLinkedList([]),generatorSinglyLinkedList([])],
            result: generatorSinglyLinkedList([]),
        },
        {
            inputs: [generatorSinglyLinkedList([]),generatorSinglyLinkedList([0])],
            result: generatorSinglyLinkedList([0]),
        },
    ];

    test.each(cases)(`mergeTwoLists:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(mergeTwoLists(...inputs)).toEqual(result)
    })
});
