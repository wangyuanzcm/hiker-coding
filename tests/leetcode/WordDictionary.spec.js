import WordDictionary from '../../src/leetcode/WordDictionary';

describe('wordDictionary:211. 添加与搜索单词 - 数据结构设计', () => {
    test(`wordDictionary:inputs is $inputs,result should be $result`, () => {
        let wordDictionary = new WordDictionary();
        wordDictionary.addWord("bad");
        wordDictionary.addWord("dad");
        wordDictionary.addWord("mad");
        expect(wordDictionary.search("pad")).toEqual(false)
        expect(wordDictionary.search("bad")).toEqual(true)
        expect(wordDictionary.search(".ad")).toEqual(true)
        expect(wordDictionary.search("b..")).toEqual(true)
    })
});
