import findInMountainArray from '../../src/leetcode/findInMountainArray';

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * 接口调用超过100次即视为失败
 */
 const MountainArray = function(arr){
    this.data = arr;
}
MountainArray.prototype.get = function(index) {
    return this.data[index];
}
MountainArray.prototype.length = function(){
    return this.data.length
}
describe('findInMountainArray:1095. 山脉数组中查找目标值', () => {

    const cases = [
        {
            inputs: [3,new MountainArray([1,2,3,4,5,3,1])],
            result: 2,
        },
        {
            inputs: [3,new MountainArray([0,1,2,4,2,1])],
            result: -1,
        },
    ];

    test.each(cases)(`findInMountainArray:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(findInMountainArray(...inputs)).toEqual(result)
    })
});
