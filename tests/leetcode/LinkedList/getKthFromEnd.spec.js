import getKthFromEnd from '../../../src/leetcode/LinkedList/getKthFromEnd';
import {generatorSinglyLinkedList} from '../../../utils';

describe('getKthFromEnd:剑指 Offer 22. 链表中倒数第k个节点', () => {

    const cases = [
        {
            inputs: [generatorSinglyLinkedList([1,2,3,4,5]),2],
            result: generatorSinglyLinkedList([4,5]),
        },
    ];

    test.each(cases)(`getKthFromEnd:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(getKthFromEnd(...inputs)).toEqual(result)
    })
});
