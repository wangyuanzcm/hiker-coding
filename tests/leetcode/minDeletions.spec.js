import minDeletions from '../../src/leetcode/minDeletions';

describe('minDeletions:1647. 字符频次唯一的最小删除次数', () => {

    const cases = [
        {
            inputs: "aab",
            result: 0,
        },
        {
            inputs: "aaabbbcc",
            result: 2,
        },
        {
            inputs: "ceabaacb",
            result: 2,
        },
    ];

    test.each(cases)(`minDeletions:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(minDeletions(inputs)).toEqual(result)
    })
});
