import myMap from '../../../src/practice/polyfil/MyMap';

describe('myMap:手写一个map', () => {
    const cases = [
        {
            inputs: [[1, 4, 9, 16],x => x * 2],
            result: [1, 4, 9, 16].map(x => x * 2),
        },
    ];

    test.each(cases)(`myMap:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(myMap(...inputs)).toEqual(result)
    })
});
