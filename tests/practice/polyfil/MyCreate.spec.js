import myCreate from '../../../src/practice/polyfil/MyCreate';

describe('myCreate:.手写实现Object.create的基本原理', () => {
    const person = {
        isHuman: false,
        printIntroduction: function() {
          return this.isHuman;
        }
      };

    test(`myCreate: myCreate 创建的对象应该与Object.create创建的对象相等 `, () => {
        expect(myCreate(person)).toEqual(Object.create(person));
    })
});
