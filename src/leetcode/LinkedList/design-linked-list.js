/**
 * 707. 设计链表
 * @link: https://leetcode-cn.com/problems/design-linked-list/
 * @solution: https://leetcode-cn.com/problems/design-linked-list/solution/shi-yong-javascript-shi-yong-shu-zu-huo-dui-xiang-/
 * @param {*} params
 */ 
/**
 * Initialize your data structure here.
 */
 var MyLinkedList = function() {
    this.data = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let cur = this.data;
    for(let i=0;i<index;i++){
        if(!cur) break;
        cur=cur.next;
    }
    return cur?cur.val:-1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.data = {
        val,
        next:this.data
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let cur = this.data;
    if(!cur) return this.data = {val,next:null};
    while(cur.next){
        cur = cur.next;
    }
    cur.next = {val,next:null};
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index<=0) this.addAtHead(val);
    let cur = this.data;
    index--;
    while(index&&cur.next){
        index--;
        cur=cur.next;
    }
    if(index>0) return;
    let tmp = cur.next;
    cur.next = {val,next:tmp};
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let cur = this.data;
    let pre=null;
    if(!cur) return;
    if(index===0) return this.data = cur.next;
    while(index&&cur.next){
        index--;
        pre = cur;
        cur=cur.next;
    }
    if(index>0) return;
    pre.next = cur.next;

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
export default MyLinkedList;
