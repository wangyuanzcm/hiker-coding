/**
 * 61. 旋转链表
 * @link: https://leetcode-cn.com/problems/rotate-list/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */ 
 var rotateRight = function(head, k) {
    if(k===0||head===null||head.next === null) return head;
    let n=1;
    let cur = head;
    while(cur.next){
        cur=cur.next;
        n++
    }
    let add = n-k%n;
    if(add===n){
        return head;
    }
    cur.next = head;
    while(add){
        cur=cur.next;
        add--;
    }
    let res = cur.next;
    cur.next = null;
    return res;
};

export default rotateRight;
