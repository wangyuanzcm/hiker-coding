import minWindow from '../../../src/leetcode/SlideWindow/minWindow';

describe('minWindow:最小覆盖子串', () => {

    const cases = [
        {
            inputs: ["ADOBECODEBANC","ABC"],
            result: 'BANC',
        },
        {
            inputs: ["a","a"],
            result: 'a',
        },
    ];

    test.each(cases)(`minWindow:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(minWindow(...inputs)).toEqual(result)
    })
});
