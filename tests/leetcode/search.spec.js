import search from '../../src/leetcode/search';

describe('search:33. 搜索旋转排序数组', () => {

    const cases = [
        {
            inputs: [[4,5,6,7,0,1,2], 0],
            result: 4,
        },
        {
            inputs: [[4,5,6,7,0,1,2], 3],
            result: -1,
        },
        {
            inputs: [[1], 0],
            result: -1,
        },
    ];

    test.each(cases)(`search:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(search(...inputs)).toEqual(result)
    })
});
