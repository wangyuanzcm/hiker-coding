import addStrings from '../../src/leetcode/addStrings';

describe('addStrings:415. 字符串相加', () => {

    const cases = [
        {
            inputs: ['11','123'],
            result: '134',
        },
    ];

    test.each(cases)(`addStrings:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(addStrings(...inputs)).toEqual(result)
    })
});
