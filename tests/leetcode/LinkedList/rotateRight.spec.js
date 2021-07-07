import rotateRight from '../../../src/leetcode/LinkedList/rotateRight';
import {generatorSinglyLinkedList} from '../../../utils';

describe('rotateRight:61. 旋转链表', () => {

    const cases = [
        {
            inputs: [generatorSinglyLinkedList([1,2,3,4,5]),2],
            result: generatorSinglyLinkedList([4,5,1,2,3]),
        },
        {
            inputs: [generatorSinglyLinkedList([0,1,2]),4],
            result: generatorSinglyLinkedList([2,0,1]),
        },
    ];

    test.each(cases)(`rotateRight:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(rotateRight(...inputs)).toEqual(result)
    })
});
