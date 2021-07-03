import firstUniqChar from '../../src/leetcode/firstUniqChar';

describe('firstUniqChar:387. 字符串中的第一个唯一字符', () => {

    const cases = [
        {
            inputs: ['leetcode'],
            result: 0,
        },
        {
            inputs: ['loveleetcode'],
            result: 2,
        },
        {
            inputs: ['aabb'],
            result: -1,
        },
    ];

    test.each(cases)(`firstUniqChar:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(firstUniqChar(...inputs)).toEqual(result)
    })
});
