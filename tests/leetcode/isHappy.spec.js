import isHappy from '../../src/leetcode/isHappy';

describe('isHappy:编写一个算法来判断一个数 n 是不是快乐数。', () => {

    const cases = [
        {
            inputs: [11],
            result: false,
        },
        {
            inputs: [19],
            result: true,
        },
        {
            inputs: [2],
            result: false,
        },
    ];
    test.each(cases)(`isHappy:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(isHappy(...inputs)).toEqual(result)
    })
});


// const {
//     core: { describe, it, expect, run },
//     prettify,
//   } = window.jestLite;



//   describe("isHappy:编写一个算法来判断一个数 n 是不是快乐数。", () => {
//     const cases = [
//       {
//         inputs: [11],
//         result: false,
//       },
//       {
//         inputs: [19],
//         result: true,
//       },
//       {
//         inputs: [2],
//         result: false,
//       },
//     ];
//     cases.forEach(({ inputs, result }) => {
//       it(`isHappy:inputs is ${inputs},result should be ${result}`, () => {
//         expect(isHappy(...inputs)).toEqual(result);
//       });
//     });
//   });

//   prettify.toHTML(run(), document.body);