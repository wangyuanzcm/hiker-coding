import sortArrayByParityII from '../../src/leetcode/sortArrayByParityII';

describe('sortArrayByParityII:922. 按奇偶排序数组 II', () => {

    const cases = [
        {
            inputs: [4,2,5,7],
        },
    ];

    test.each(cases)(`sortArrayByParityII:inputs is $inputs`, ({ inputs }) => {
        const wantted = [
            [4,5,2,7],
            [4,7,2,5],
            [2,5,4,7],
            [2,7,4,5] 
        ]
        expect(wantted).toContainEqual(sortArrayByParityII(inputs));
    })
});
