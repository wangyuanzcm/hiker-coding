/**
 * 208. 实现 Trie (前缀树)
 * @link: https://leetcode-cn.com/problems/implement-trie-prefix-tree/
 */ 
/**
 * Initialize your data structure here.
 */
 var Trie = function() {
    this.children = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.children;
    for(let i of word){
        if(!node[i]){
            node[i] = {}
        }
        node = node[i]
    }
    node.flag = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.children;
    for(let i of word){
        if(!node[i]) return false;
        node = node[i];
    }
    if(node.flag) return true
    return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.children;
    for(let i of prefix){
        if(!node[i]) return false;
        node = node[i]
    }
    return !!node
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export default Trie;
