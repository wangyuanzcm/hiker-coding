/**
 * 211. 添加与搜索单词 - 数据结构设计
 * @link: https://leetcode-cn.com/problems/design-add-and-search-words-data-structure/
 */ 

/**
 * Initialize your data structure here.
 */
 var WordDictionary = function() {
    this.children = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.children;
    for(let char of word){
        if(!node[char]){
            node[char] = {};
        }
        node = node[char];
    }
    node.flag = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word,node=this.children) {
    for(let i=0;i<word.length;i++){
        let char = word[i];
        if(char === '.'){
            for (const key in node) {
                if (this.search(word.slice(i + 1, word.length), node[key])) {
                    return true;
                }
            }
            return false;
        }else if(!node[char]){
            return false;
        }
        node = node[char]
    }
    if(node.flag) return true;
    return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


export default WordDictionary;
