/**
 * 142. 环形链表 II
 * @link: https://leetcode-cn.com/problems/linked-list-cycle-ii/
 * @param {ListNode} head
 * @return {ListNode}
 */ 
 var detectCycle = function(head) {
    let visited = new Set();
    while(head !== null){
        if(visited.has(head)){
            return head;
        }
        visited.add(head);
        head=head.next;
    }
    return null;
};

export default detectCycle;
