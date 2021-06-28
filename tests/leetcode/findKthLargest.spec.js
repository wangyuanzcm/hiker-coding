import findKthLargest from '../../src/leetcode/findKthLargest';

describe('findKthLargest:在未排序的数组中找到第 k 个最大的元素。', () => {

    const cases = [
        {
            inputs: [[3,2,1,5,6,4],2],
            result: 5,
        },
        {
            inputs: [[3,2,3,1,2,4,5,5,6] ,4],
            result: 4,
        },
    ];

    test.each(cases)(`findKthLargest:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(findKthLargest(...inputs)).toEqual(result)
    })
});
