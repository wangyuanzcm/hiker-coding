import parseString from '../../src/practice/parseString';

describe('parseString:', () => {
    const cases = [
        {
            inputs: ['name=adam&name=bob&obj={a:1,b:4}&use&encodeStr=%20'],
            result: {
                name: ['adam', 'bob'],
                obj: {a:1, b:2},
                use: false,
                encodeStr: ' '
              },
        },
    ];

    test.each(cases)(`parseString:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(parseString(...inputs)).toEqual(result)
    })
});
