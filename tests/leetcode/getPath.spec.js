import getPath from '../../src/leetcode/getPath';

describe('getPath:获得模块完整的逆向依赖路径', () => {
    const dependency = {
        "A": [
            "B",
        ],
        "B": [
            "C",
            "D"
        ],
        "C": [
          "A"
        ]
    }
    const cases = [
        {
            inputs: ['A',dependency],
            result: [ 'A->B->C->A', 'A->B->D' ],
        },
        {
            inputs: ['B',dependency],
            result: [ 'B->C->A->B', 'B->D' ],
        },
    ];

    test.each(cases)(`getPath:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(getPath(...inputs)).toEqual(result)
    })
});
