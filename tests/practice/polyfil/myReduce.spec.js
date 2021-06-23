import myReduce from '../../../src/practice/polyfil/myReduce';

describe('myReduce:手写数组的reduce方法', () => {
    const cases = [
        {
            inputs: [[0, 1, 2, 3, 4], (prev, curr) => prev + curr, 0],
            result: [0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr, 0)
        },
    ];

    test.each(cases)(`myReduce:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(myReduce(...inputs)).toEqual(result)
    })
});
