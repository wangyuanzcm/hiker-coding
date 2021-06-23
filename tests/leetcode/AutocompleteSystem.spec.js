import AutocompleteSystem from '../../src/leetcode/AutocompleteSystem';

describe('autocompleteSystem:设计搜索自动补全系统', () => {

    const cases = [
        {
            inputs: ["AutocompleteSystem","input","input","input","input"],
            params:[[["i love you","island","iroman","i love leetcode"],[5,3,2,2]],["i"],[" "],["a"],["#"]],
            result: [null,["i love you","island","i love leetcode"],["i love you","i love leetcode"],[],[]],
        },
    ];

    test.each(cases)(`autocompleteSystem:inputs is $inputs,result should be $result`, ({ inputs,params, result }) => {
        inputs.shift();
        result.shift();
        let newAutocompleteSystem = new AutocompleteSystem(...params.shift());

        for(let i = 0;i<inputs.length;i++){
            expect(newAutocompleteSystem.input(params[i])).toEqual(result[i])
        }
    })
});
