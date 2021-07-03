/**
 * 862. 和至少为 K 的最短子数组
 * @link: https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */ 
 var shortestSubarray = function(nums, k) {
    let len = nums.length;
    let stack = new Array(len+1).fill(0);
    for(let i=0;i<len;i++){
        stack[i+1] = nums[i]+stack[i];
    }
    let queue = [];
    let min = len+1;
    for(let i=0;i<stack.length;i++){
        while(queue.length!==0&&stack[queue[queue.length-1]]>=stack[i]){
            queue.pop();
        }
        while(queue.length!==0&&stack[i]-stack[queue[0]]>=k){
            min = Math.min(min,i-queue[0]);
            queue.shift()
        }
        queue.push(i);
    }
    return min<len+1?min:-1;
};

export default shortestSubarray;
