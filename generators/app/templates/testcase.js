const <%= funcName %> = require('../src/<%= caseName %>');

describe('<%= funcName %>:<%= description %>', () => {
    const cases = [
        {
            inputs: [],
            result: '',
        },
    ];

    test.each(cases)(`<%= funcName %>:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(<%= funcName %>(...inputs)).toEqual(result)
    })
});
