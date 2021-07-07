import searchMatrix from '../../src/leetcode/searchMatrix';

describe('searchMatrix:74. 搜索二维矩阵', () => {

    const cases = [
        {
            inputs: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3],
            result: true,
        },
        {
            inputs: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13],
            result: false,
        },
    ];

    test.each(cases)(`searchMatrix:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(searchMatrix(...inputs)).toEqual(result)
    })
});
