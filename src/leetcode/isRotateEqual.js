/**
 * 算法：给你一个纯数字字符串，判断旋转180度之后是否和自己相等
 * @param {string} str
 */
const isRotateEqual = (str) => {
    let map = new Map([
        ['0', '0'],
        ['1', '1'],
        ['6', '9'],
        ['8', '8'],
        ['9', '6']])
    for (let i = 0, len = str.length; i < len; i++) {
        if (!map.get(str[i]) || str[i] !== map.get(str[len - i - 1])) {
            return false;
        }
    }
    return true;
};
export default isRotateEqual;
