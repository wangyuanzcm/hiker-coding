import dropRepeat from '../../src/leetcode/dropRepeat';

describe('dropRepeat:找出重复元素', () => {

    const cases = [
        {
            inputs: [
                { a: 1, b: 2 },
                { b: 3, a: 1 },
                { b: 2, a: 1 },
                { b: 2, a: 2},
                { a: '1', b: 2 },
                { b: 2, a: '1' },
                { e: 1 },
            ],
            result: [{ a: 1, b: 2 }, { a: '1', b: 2 }],
        },
    ];

    test.each(cases)(`dropRepeat:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(dropRepeat(inputs)).toEqual(result)
    })
});
