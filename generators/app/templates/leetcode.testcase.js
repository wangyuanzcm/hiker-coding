import <%= funcName.split('/').pop() %> from '../../src/leetcode/<%= caseName %>';

describe('<%= funcName %>:<%= description %>', () => {

    const cases = [
        {
            inputs: [],
            result: '',
        },
    ];

    test.each(cases)(`<%= funcName %>:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(<%= funcName.split('/').pop() %>(...inputs)).toEqual(result)
    })
});
