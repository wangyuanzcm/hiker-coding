import reverseList from '../../../src/leetcode/LinkedList/reverseList';
import {generatorSinglyLinkedList} from '../../../utils';

describe('reverseList:206. 反转链表', () => {

    const cases = [
        {
            inputs: [generatorSinglyLinkedList([1,2,3,4,5])],
            result: [5,4,3,2,1],
        },
        {
            inputs: [generatorSinglyLinkedList([1,2])],
            result: [2,1],
        },
        {
            inputs: [generatorSinglyLinkedList([])],
            result: [],
        },
    ];

    test.each(cases)(`reverseList:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(reverseList(...inputs)).toEqual(result)
    })
});
