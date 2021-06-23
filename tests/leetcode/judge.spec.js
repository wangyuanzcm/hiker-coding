import judge from '../../src/leetcode/judge';

describe('judge:判断牌面是否有顺子', () => {

    const cases = [
        {
            inputs: [8,2,4,5,6,7,18,11],
            result: true,
        },
        {
            inputs: [0,4,6,7,8,9,11],
            result: false,
        },
    ];

    test.each(cases)(`judge:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(judge(inputs)).toEqual(result)
    })
});
