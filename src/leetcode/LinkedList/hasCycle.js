/**
 * 给定一个链表，判断链表中是否有环。
 * @link: https://leetcode-cn.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean} 
 **/ 
 var hasCycle = function(head) {
    if(head==null||head.next==null) return false;
    let l = head,r=head.next;
    while(l!== r){
        if(r==null||r.next==null){
            return false;
        }
        l=l.next;
        r=r.next.next;
    }
    return true;
};

export default hasCycle;
