import reverseBetween from '../../../src/leetcode/LinkedList/reverse-linked-list-ii';
import {generatorSinglyLinkedList} from '../../../utils';
describe('linkedList/reverseLinkedListIi:92. 反转链表 II', () => {

    const cases = [
        {
            inputs: [generatorSinglyLinkedList([1,2,3,4,5]),2,4],
            result: [1,4,3,2,5],
        },
        {
            inputs: [generatorSinglyLinkedList([5]),1,1],
            result: [5],
        },
    ];

    test.each(cases)(`linkedList/reverseLinkedListIi:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(reverseBetween(...inputs)).toEqual(generatorSinglyLinkedList(result))
    })
});
