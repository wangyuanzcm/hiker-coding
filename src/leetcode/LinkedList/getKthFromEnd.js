/**
 * 剑指 Offer 22. 链表中倒数第k个节点
 * @link: https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */ 
 var getKthFromEnd = function(head, k) {
    let n=1;
    let dummy = head;
    while(head){
        head=head.next;
        n++;
    }
    let count = n-k-1;
    let cur = dummy;
    while(count>0){
        cur=cur.next;
        count--
    }
    return cur;
};

export default getKthFromEnd;
