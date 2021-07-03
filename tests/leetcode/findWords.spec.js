import findWords from '../../src/leetcode/findWords';

describe('findWords:212. 单词搜索 II', () => {

    const cases = [
        {
            inputs: [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], ["oath", "pea", "eat", "rain"],
            result: ["eat", "oath"],
        },
        {
            inputs: [[["a", "b"], ["c", "d"]], ["abcb"]],
            result: [],
        },
    ];

    test.each(cases)(`findWords:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(findWords(...inputs).sort()).toEqual(result.sort())
    })
});
