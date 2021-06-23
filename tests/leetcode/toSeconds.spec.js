import toSeconds from '../../src/leetcode/toSeconds';

describe('toSeconds:代码实现计时器时间转总秒数', () => {
    const cases = [
        {
            inputs: "01:08:20",
            result: 4100,
        },
        {
            inputs: "08:20",
            result: 500,
        },
    ];
    test.each(cases)(`toSeconds:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(toSeconds(inputs)).toEqual(result)
    })
});
