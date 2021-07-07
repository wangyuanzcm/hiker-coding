import sortList from '../../../src/leetcode/LinkedList/sortList';
import {generatorSinglyLinkedList} from '../../../utils';

describe('sortList:148. 排序链表', () => {

    const cases = [
        {
            inputs: generatorSinglyLinkedList([4,2,1,3]),
            result: generatorSinglyLinkedList([1,2,3,4]),
        },
        {
            inputs: generatorSinglyLinkedList([-1,5,3,4,0]),
            result: generatorSinglyLinkedList([-1,0,3,4,5]),
        },
        {
            inputs: generatorSinglyLinkedList([]),
            result: generatorSinglyLinkedList([]),
        },
    ];

    test.each(cases)(`sortList:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(sortList(inputs)).toEqual(result)
    })
});
