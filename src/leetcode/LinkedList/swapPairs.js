/**
 * 24. 两两交换链表中的节点
 * @link: https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @param {ListNode} head
 * @return {ListNode}
 */ 
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 var swapPairs = function(head) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while(temp.next!==null&&temp.next.next!==null){
        const node1 = temp.next;
        const node2 = temp.next.next;
        temp.next= node2;
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
    }
    return dummyHead.next;
};

export default swapPairs;
