import throttle from '../../../src/practice/tools/throttle';
describe('throttle:手写节流(Throttling)', () => {

    test(`throttle: params should be a function`, () => {
        const mockFn = jest.fn();
        // 封装为节流方法
        const fn = throttle(mockFn, 10);
        // 同步调用两次
        fn(1);
        fn(2);
        setTimeout(() => {
            fn(3);
            const calls = mockFn.mock.calls;
            // 断言 mock方法只调用一次
            expect(calls.length).toEqual(1);
        }, 100);
       
    })
})