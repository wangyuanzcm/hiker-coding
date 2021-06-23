/**
 * 使用setTimeout模拟setInterval
 * 避免setInterval因为函数执行时间导致的间隔时间不一致
 * @param {*} params
 */ 
const mySetInterval = setTimeout(function() {
    // do something
    setTimeout(arguments.callee, 500);
  }, 500);

export default mySetInterval;
