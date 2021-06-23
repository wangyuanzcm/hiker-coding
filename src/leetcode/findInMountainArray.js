/**
 * 1095. 山脉数组中查找目标值
 * @link: https://leetcode-cn.com/problems/find-in-mountain-array/
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */ 

 var findInMountainArray = function(target, mountainArr) {
    // 一 查找峰值
    let left = 0
    let right = mountainArr.length() - 1
    let mid = left + ((right - left) >> 1)
    while(left <= right){
      if(mountainArr.get(mid) < mountainArr.get(mid + 1)){ // 当mid小于右边的时,说明峰值在右边, 继续在右边查找
        left = mid + 1
      } else {                                             // 否则在左边, 继续在左边查找
        right = mid - 1
      }
      mid = left + ((right - left) >> 1)
    }
    // 执行完上边的二分查找 left 就是峰值的下标了

    // 二  根据峰值分两段 二分查找
    let res = -1
    res = binarySearch(mountainArr, 0, left, target, true)
    res === -1 && (res = binarySearch(mountainArr, left, mountainArr.length() - 1, target, false))
    return res
  };
  /**
 * @param {MountainArray} mountainArr
 * @param {number} left
 * @param {number} right
 * @param {number} target
 * @param {Boolean} isUp
 * @return {number} 
 */
  function binarySearch(mountainArr, left, right, target, isUp){
    let mid = left + ((right - left) >> 1)　　　// 获取中间索引
    while(left <= right){
      let midValue = mountainArr.get(mid)
      if(midValue === target) return mid        // 找到直接返回  
      if(midValue < target){
        isUp ? left = mid + 1 : right = mid - 1    //用 isUp  区分正序还是降序
      } else {
        isUp ? right = mid - 1 : left = mid + 1
      }
      mid = left + ((right - left) >> 1)
    }
    return -1
  }


export default findInMountainArray;
