/**
 * 21. 合并两个有序链表
 * @link: https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */ 
 var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(-1);
    let dummy = head;
    while(l1!=null&&l2!=null){
        if(l1.val>=l2.val){
            dummy.next = l2;
            l2=l2.next;
        }else{
            dummy.next = l1;
            l1=l1.next;
        }
        dummy=dummy.next;
    }
    dummy.next = l1===null?l2:l1;
    return head.next
};

export default mergeTwoLists;
