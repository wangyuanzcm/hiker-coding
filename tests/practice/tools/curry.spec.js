import curry from '../../../src/practice/tools/curry';

describe('curry:函数柯理化和反柯理化', () => {

    let curryTest = curry((a, b, c, d) => a + b + c + d);
    
    test(`curry:函数柯理化参数测试`, () => {
        expect(curryTest(1, 2, 3)(4)).toEqual(10);
        expect(curryTest(1, 2)(4)(3)).toEqual(10);
        expect(curryTest(1, 2)(3, 4)).toEqual(10);
    })
});
