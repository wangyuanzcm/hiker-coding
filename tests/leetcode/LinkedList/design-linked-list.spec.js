import MyLinkedList from '../../../src/leetcode/LinkedList/design-linked-list';
import {generatorSinglyLinkedList} from '../../../utils';

describe('linkedList/designLinkedList:707. 设计链表', () => {
    const cases = [
        {
            inputs: [[],[1],[3],[1,2],[1],[1],[1]],
            result: [[],[1],[1,3],[1,2,3],2,[1,3],3],
        },
    ];

    test.each(cases)(`linkedList/designLinkedList:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        let linkedList = new MyLinkedList();
        expect(linkedList.data).toEqual(generatorSinglyLinkedList(result[0]))
        linkedList.addAtHead(1);
        expect(linkedList.data).toEqual(generatorSinglyLinkedList(result[1]))
        linkedList.addAtTail(3);
        expect(linkedList.data).toEqual(generatorSinglyLinkedList(result[2]))
        linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
        expect(linkedList.data).toEqual(generatorSinglyLinkedList(result[3]))
        //返回2
        expect(linkedList.get(1)).toEqual(result[4])
        linkedList.deleteAtIndex(1);  //现在链表是1-> 3
        expect(linkedList.data).toEqual(generatorSinglyLinkedList(result[5]))
        expect(linkedList.get(1)).toEqual(result[6])
    })
});
