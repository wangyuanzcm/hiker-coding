import accountsMerge from '../../src/leetcode/accountsMerge';

describe('accountsMerge:721. 账户合并', () => {

    const cases = [
        {
            inputs: [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]],
            result: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]],
        },
    ];

    test.each(cases)(`accountsMerge:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(accountsMerge(inputs).sort()).toEqual(result.sort())
    })
});
