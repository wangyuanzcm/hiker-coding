/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * 92. 反转链表 II
 * @link: https://leetcode-cn.com/problems/reverse-linked-list-ii/
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */ 
 var reverseBetween = function(head, left, right) {
    let dummy = new ListNode();
    dummy.next = head;
    let p = dummy;
    for(let i=0;i<left-1;i++){
        p=p.next;
    }
    let leftHead = p;
    let startHead = leftHead.next;
    let pre = startHead;
    let cur = pre.next;
    for(let i=left;i<right;i++){
        let next =cur.next;
        cur.next = pre;
        pre=cur;
        cur=next;
    }
    leftHead.next = pre;
    startHead.next = cur;
    return dummy.next
};

export default reverseBetween;
