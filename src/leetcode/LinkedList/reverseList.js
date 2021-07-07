/**
 * 206. 反转链表
 * @link: https://leetcode-cn.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */ 
 var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while(cur){
        const next = cur.next;
        cur.next = prev;
        prev=cur;
        cur =next;
    }
    return prev;
  };

export default reverseList;
