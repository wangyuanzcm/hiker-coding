import hasCycle from '../../../src/leetcode/LinkedList/hasCycle';
import {generatorSinglyLinkedList} from '../../../utils';
describe('hasCycle:给定一个链表，判断链表中是否有环。', () => {
    const cases = [
        {
            inputs: [generatorSinglyLinkedList([3,2,0,-4],1)],
            result: true,
        },
        {
            inputs: [generatorSinglyLinkedList([1,2],0)],
            result: true,
        },
        {
            inputs: [generatorSinglyLinkedList([1],-1)],
            result: false,
        }
    ];

    test.each(cases)(`hasCycle:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(hasCycle(...inputs)).toEqual(result)
    })
});