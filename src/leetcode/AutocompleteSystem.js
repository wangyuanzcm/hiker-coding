/**
 * 设计搜索自动补全系统
 * @link: https://leetcode-cn.com/problems/design-search-autocomplete-system/
 * @param {string[]} sentences
 * @param {number[]} times
 */
class Trie {
    constructor(sentences, times) {
        this.root = Object.create(null)
        for (let i = 0, len = sentences.length; i < len; i++){
            this.add(sentences[i], times[i])
        }
    }
    add(word, time) {
        let node = this.root
        for (let c of word) {
            if (!node[c]) node[c] = Object.create(null)
            node = node[c]
        }
        node.isEnd = true
        node.word = word
        node.time = (node.time || 0) + time
    }
    search(word) {
        let ans = []
        let node = this.root
        for (let c of word) {
            if (!node[c]) return ans
            node = node[c]
        }
        this.dfs(node, ans)
        return ans
    }
    dfs(node, ans) {
        if (node.isEnd) ans.push(node)
        for (let p in node) {
            if (p == 'word' || p == 'time') continue
            this.dfs(node[p], ans)
        }
    }
}
class AutocompleteSystem {
    constructor(sentences, times) {
        this.trie = new Trie(sentences, times)
        this.cur = ''
    }

    /** 
     * @param {character} c
     * @return {string[]}
     */
    input(c) {
        if (c == '#') {
            this.trie.add(this.cur, 1)
            this.cur = ''
            return []
        }

        this.cur += c
        let ans = this.trie.search(this.cur)
        return ans.sort((a, b) => {
            if (a.time == b.time) {
                if (a.word < b.word) return -1
                return 1
            }
            return b.time - a.time
        }).map(v => v.word).slice(0, 3)
    };

};

export default AutocompleteSystem;
