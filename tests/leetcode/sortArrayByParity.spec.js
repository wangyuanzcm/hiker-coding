import sortArrayByParity from '../../src/leetcode/sortArrayByParity';

describe('sortArrayByParity:905. 按奇偶排序数组', () => {

    const cases = [
        {
            inputs: [3, 1, 2, 4],
        },
    ];

    test.each(cases)(`sortArrayByParity:inputs is $inputs`, ({ inputs }) => {
        let wantted = [
            [2, 4, 3, 1], [4, 2, 3, 1], [2, 4, 1, 3], [4, 2, 1, 3]
        ];
        expect(wantted).toContainEqual(sortArrayByParity(inputs));
    })
});
