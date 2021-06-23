/**
 * 手写节流(Throttling)
 * @param {*} params
 */
const throttle = function(fn, delay) {
    let prev = Date.now();
    return function () {
        let context = this;
        let args = arguments;
        let now = Date.now();
        if (now - prev >= delay) {
            fn.apply(context, args);
            prev = Date.now();
        }
    }
};

export default throttle;
