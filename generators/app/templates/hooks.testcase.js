import { renderHook } from '@testing-library/react-hooks'
import <%= funcName %> from '../src/<%= funcName %>';
import { useEffect } from 'react';

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
