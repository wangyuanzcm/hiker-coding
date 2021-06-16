function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//根据简化数组生成一个单向链表
/**
 * 链表中节点数目为 n
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * @param {*} list 
 * @returns 
 */
const generatorSinglyLinkedList = (list)=>{
    if(!list.length) return null;
    let dummy = new ListNode();
    let cur = dummy;
    for(let i=0; i<list.length; i++){
        let node = new ListNode(list[i]);
        cur.next = node;
        cur = cur.next;
    }
    return dummy.next;
}

export default generatorSinglyLinkedList;