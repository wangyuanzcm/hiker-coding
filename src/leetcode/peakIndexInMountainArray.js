/**
 * 852. 山脉数组的峰顶索引
 * @link: https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/
 * @param {number[]} arr
 * @return {number}
 */ 
 var peakIndexInMountainArray = function(arr) {
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            return i-1;
        }
    }
    return -1;
};

export default peakIndexInMountainArray;
