import equationsPossible from '../../src/leetcode/equationsPossible';

describe('equationsPossible:990. 等式方程的可满足性', () => {

    const cases = [
        {
            inputs: ["a==b","b!=a"],
            result: false,
        },
        {
            inputs: ["b==a","a==b"],
            result: true,
        },
        {
            inputs: ["a==b","b==c","a==c"],
            result: true,
        },
        {
            inputs: ["a==b","b!=c","c==a"],
            result: false,
        },
        {
            inputs: ["c==c","b==d","x!=z"],
            result: true,
        },
    ];

    test.each(cases)(`equationsPossible:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(equationsPossible(inputs)).toEqual(result)
    })
});
