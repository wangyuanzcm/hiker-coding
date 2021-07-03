import superEggDrop from '../../src/leetcode/superEggDrop';

describe('superEggDrop:887. 鸡蛋掉落', () => {

    const cases = [
        {
            inputs: [1,2],
            result: 2,
        },
        {
            inputs: [2,6],
            result: 3,
        },
        {
            inputs: [3,14],
            result: 4,
        },
    ];

    test.each(cases)(`superEggDrop:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(superEggDrop(...inputs)).toEqual(result)
    })
});
