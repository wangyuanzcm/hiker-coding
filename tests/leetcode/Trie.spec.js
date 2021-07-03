import Trie from '../../src/leetcode/Trie';

describe('trie:208. 实现 Trie (前缀树)', () => {
    test(`trie:inputs is $inputs,result should be $result`, () => {
        let trie = new Trie();
        trie.insert("apple");
        expect(trie.search("apple")).toEqual(true)
        expect(trie.search("app")).toEqual(false)
        expect(trie.startsWith("app")).toEqual(true)
        trie.insert("app");
        expect(trie.search("app")).toEqual(true)
    })
});
