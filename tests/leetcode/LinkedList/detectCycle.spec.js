import detectCycle from '../../../src/leetcode/LinkedList/detectCycle';
import {generatorSinglyLinkedList} from '../../../utils';

describe('detectCycle:142. 环形链表 II', () => {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    //对于返回链表节点的测试尚未添加
    const cases = [
        // {
        //     inputs: generatorSinglyLinkedList([3,2,0,-4],1),
        //     result: '',
        // },
        // {
        //     inputs: generatorSinglyLinkedList([1,2],0),
        //     result: new Node(),
        // },
        {
            inputs: generatorSinglyLinkedList([1]),
            result: null,
        },
    ];

    test.each(cases)(`detectCycle:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(detectCycle(...inputs)).toEqual(result)
    })
});
