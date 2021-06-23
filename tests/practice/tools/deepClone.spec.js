import deepClone from '../../../src/practice/tools/deepClone';

describe('deepClone:手写一个JS深拷贝', () => {
    let foo = Symbol('foo');
    let target = {
        test: {
            a: 2
        },
        arr: [],
        foo: "value"
    };
    target.obj = target;
    test(`deepClone:可以复制symbols和解决循环引用问题`, () => {
        expect(deepClone(target)).toEqual(target);
    })
});
