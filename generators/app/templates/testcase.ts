import { <%= funcName %>, Param, Result } from '../src/<%= caseName %>';

type CaseParameters = {
    param: Param;
    result: Result;
}

describe('<%= funcName %>:<%= description %>', () => {
    const cases: CaseParameters[] = [
        {
            inputs: [],
            result: '',
        },
    ];

    test.each(cases)(`<%= funcName %>:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(<%= funcName %>(...inputs)).toEqual(result)
    })
});
