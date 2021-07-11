  /**
   * 编写一个算法来判断一个数 n 是不是快乐数。
   * @link: https://leetcode-cn.com/problems/happy-number/
   * @param {number} n
   * @return {boolean}
   */ 
  let getNext = function (n) {
    return n.toString().split('').map(i => i ** 2).reduce((a, b) => a + b);
  }
  let isHappy = function (n) {
    let slow = n;
    let fast = getNext(n);
    while(fast !== 1 && fast !== slow){
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
  };



