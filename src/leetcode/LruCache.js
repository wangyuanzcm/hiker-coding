/**
 * 使用双向链表实现LruCache
 * 首先使用哈希表进行定位，找出缓存项在双向链表中的位置，随后将其移动到双向链表的头部，即可在 O(1)O(1) 的时间内完成 get 或者 put 操作
 * 数组？元素的插入和移动是 O(n)O(n)，删除元素也是 O(n)。
 * 单向链表？删除节点需要访问前驱节点，只能花 O(n) 从前遍历查找。
 * 双向链表，结点有前驱指针，删除和移动节点都是指针的变动，都是 O(1)。
 * @link: https://leetcode-cn.com/problems/lru-cache/solution/146-lru-huan-cun-ji-zhi-shuang-xiang-lian-biao-ha-/
 * @param {number} capacity
 */ 
 class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.hash = {};
        this.count = 0;
        this.dummyHead = new ListNode();
        this.dummyTail = new ListNode();
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }
    isFull() {
        return this.count === this.capacity;
    }
    removeNode(node) {
        let temp1 = node.prev;
        let temp2 = node.next;
        temp1.next = temp2;
        temp2.prev = temp1;
        return node;
    }
    addToHead(node) {
        node.prev = this.dummyHead;
        node.next = this.dummyHead.next;
        this.dummyHead.next.prev = node;
        this.dummyHead.next = node
    }
    get(key) {
        if (key in this.hash) {
            let node = this.hash[key];
            this.addToHead(this.removeNode(node));
            return node.value
        } else {
            return -1;
        }
    }
    put(key, value) {
        if (key in this.hash) {
            const node = this.hash[key];
            node.value = value;
            this.addToHead(this.removeNode(node));
        } else {
            if (this.isFull()) {
                const node = this.dummyTail.prev;
                delete this.hash[node.key];
                this.removeNode(node);
                this.count--;
            }
            const node = new ListNode(key, value);
            this.hash[key] = node;
            this.addToHead(node);
            this.count++;
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
export default LRUCache;
