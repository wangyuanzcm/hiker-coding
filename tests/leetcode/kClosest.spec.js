import kClosest from '../../src/leetcode/kClosest';

describe('kClosest:973. 最接近原点的 K 个点', () => {

    const cases = [
        {
            inputs: [[[1,3],[-2,2]],  1],
            result: [[-2,2]],
        },
        {
            inputs: [[[3,3],[5,-1],[-2,4]], 2],
            result: [[3,3],[-2,4]],
        },
    ];

    test.each(cases)(`kClosest:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(kClosest(...inputs)).toEqual(result)
    })
});
