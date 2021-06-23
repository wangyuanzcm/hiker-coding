import myNew from '../../../src/practice/polyfil/MyNew';

describe('myNew:手写实现new操作符', () => {
    function Person(name, age) {
        this.name = name
        this.age = age
    }
    function Person1(name, age) {
        this.name = name
        this.age = age
        return "something"
    }
    function Person2(name, age) {
        this.name = name
        this.age = age
        return {
            habit:"game"
        }
    }
    test(`myNew:没有返回值的时候与new比较`, (done) => {
        let obj = myNew(Person)('chen', 18); // {name: "chen", age: 18}
        let newObj = new Person('chen', 18);
        expect(obj.name).toEqual(newObj.name);
        expect(obj.age).toEqual(newObj.age);
        done()
    })
    test(`myNew:返回基本类型的时候与new比较`, (done) => {
        let obj = myNew(Person1)('chen', 18); // {name: "chen", age: 18}
        let newObj = new Person1('chen', 18);
        expect(obj.name).toEqual(newObj.name);
        expect(obj.age).toEqual(newObj.age);
        done()
    })
    test(`myNew:返回对象的时候与new比较`, (done) => {
        let obj = myNew(Person2)('chen', 18) // {name: "chen", age: 18}
        let newObj = new Person2('chen', 18)
        expect(obj.name).toEqual(newObj.name)
        expect(obj.age).toEqual(newObj.age)
        expect(obj.habit).toEqual(newObj.habit)
        done()
    })
});
