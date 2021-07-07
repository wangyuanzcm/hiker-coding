/**
 * 148. 排序链表
 * @link: https://leetcode-cn.com/problems/sort-list/
 * @param {ListNode} head
 * @return {ListNode}
 */ 
 function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
 const merge = (head1,head2)=>{
    const dummy = new ListNode(0);
    let temp = dummy;
    let temp1 = head1;
    let temp2 = head2;
    while(temp1!==null&&temp2!==null){
        if(temp1.val<=temp2.val){
            temp.next =temp1;
            temp1=temp1.next;
        }else{
            temp.next = temp2;
            temp2=temp2.next;
        }
        temp=temp.next;
    }
    if(temp1!==null){
        temp.next = temp1;
    }else if(temp2!==null){
        temp.next = temp2;
    }
    return dummy.next;
}
var sortList = function(head,tail=null) {
   if(head===null) return head;
   if(head.next === tail) {
       head.next = null;
       return head;
   }
   let slow = head;
   let fast = head;
   while(fast !== tail){
       slow=slow.next;
       fast=fast.next;
       if(fast !== tail){
           fast=fast.next;
       }
   }
   const mid = slow;
   return merge(sortList(head,mid),sortList(mid,tail));
};

export default sortList;
