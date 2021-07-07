import generateParenthesis from '../../src/leetcode/generateParenthesis';

describe('generateParenthesis:22. 括号生成', () => {

    const cases = [
        {
            inputs: [3],
            result: ["((()))","(()())","(())()","()(())","()()()"],
        },
        {
            inputs: [1],
            result: ["()"],
        },
    ];

    test.each(cases)(`generateParenthesis:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(generateParenthesis(...inputs)).toEqual(result)
    })
});
