import searchII from '../../src/leetcode/searchII';

describe('searchII:81. 搜索旋转排序数组 II', () => {

    const cases = [
        {
            inputs: [[2, 5, 6, 0, 0, 1, 2], 0],
            result: true,
        },
        {
            inputs: [[2, 5, 6, 0, 0, 1, 2], 3],
            result: false,
        },
    ];

    test.each(cases)(`searchII:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(searchII(...inputs)).toEqual(result)
    })
});
