import myFlat from '../../../src/practice/polyfil/myFlat';

describe('myFlat:扁平化数组方法', () => {
    const cases = [
        {
            inputs: [[1,2,3,[1,2,3,4, [2,3,4]]]],
            result: [1, 2, 3, 1, 2, 3, 4, 2, 3, 4],
        },
        {
            inputs: [[1,2,3,[1,2,3,4, [2,3,4]]],1],
            result: [1, 2, 3, 1, 2, 3, 4, [2, 3, 4]],
        },
    ];

    test.each(cases)(`myFlat:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(myFlat(...inputs)).toEqual(result)
    })
});
