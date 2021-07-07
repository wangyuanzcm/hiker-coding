import sortedSquares from '../../src/leetcode/sortedSquares';

describe('sortedSquares:977. 有序数组的平方', () => {

    const cases = [
        {
            inputs: [-4,-1,0,3,10],
            result: [0,1,9,16,100],
        },
        {
            inputs: [-7,-3,2,3,11],
            result: [4,9,9,49,121],
        },
    ];

    test.each(cases)(`sortedSquares:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(sortedSquares(inputs)).toEqual(result)
    })
});
