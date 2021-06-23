import myInstanceOf from '../../../src/practice/polyfil/MyInstanceOf';

describe('myInstanceOf:手写一个instanceOf原理', () => {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
      const auto = new Car('Honda', 'Accord', 1998);
      
    test(`myInstanceOf:inputs is $inputs,result should be $result`, () => {
        expect(myInstanceOf(auto,Car)).toEqual(auto instanceof Car)
        expect(myInstanceOf(auto,Object)).toEqual(auto instanceof Object)
    })
});
