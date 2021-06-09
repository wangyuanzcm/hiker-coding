import unionAndIntersect from '../../src/leetcode/unionAndIntersect';

const arraySort = (arr)=>{
    if(!Array.isArray(arr)) return arr;
    arr.sort((a,b)=>{
        if(Array.isArray(a)&&Array.isArray(b)){
            return a.length-b.length
        }else if(Array.isArray(a)){
            return -1;
        }else if(Array.isArray(a)){
            return 1;
        }else{
            return a-b;
        }

    }).forEach((item)=>{
        if(Array.isArray(item)){
            arraySort(item)
        }
    })
    return arr;
}
describe('unionAndIntersect:两个有序整数数组，数组中可能会有重复数字，求两个数组的交集和并集，要求交集和并集中没有重复数字', () => {
    const cases = [
        {
            inputs: [[1, 2, 2, 1], [2, 2]],
            result: [[1, 2], [2]],
        },
    ];
    test.each(cases)(`unionAndIntersect:inputs is $inputs,result should be $result`, ({ inputs, result }) => {
        expect(arraySort(unionAndIntersect(...inputs))).toEqual(arraySort(result))
    })
});
