/**
 * 字符串解析，要求相同key的多个值用数组封装
 * 如果能用JSON解析则作为json对象
 * 没有value，赋值false的boolean值
 * 1、那个use在字符串里没有值，需要自己添加false的布尔值，然后相同的name键名，要合并adam和bob
 * 2、%20这种做了base64编码的，需要转换成字符串
 * 3、还有{}大括号的，要解析成对象
 * 4、就是针对给的4个case，4种处理，不是简单的字符串转json的，所以不能用eval
 * @param {string} params
 */

const dealObjectString = (str) => {
    let temp = "";
    let res = {};
    let key = '';
    for (let item of str) {
        console.log(temp, key, 'temp');
        if (item === '{') {
            continue;
        } else if (item === "}") {
            res[key] = temp;
            temp = '';
            key = '';
        } else if (item === ",") {
            res[key] = temp;
            temp = '';
            key = '';
        } else if (item === ":") {
            key = temp;
            temp = '';
        } else {
            temp += item;
        }
    }

    return res;
}
const parseString = (params) => {
    let stack = params.split('&');
    return stack.reduce((pre, cur) => {
        if (cur.indexOf('=') < 0) {
            pre[cur] = false;
            return pre;
        }
        let [key, val] = cur.split('=');
        val = decodeURI(val);
        if (/\{(\w|\W)\}*/.test(val)) {
            val = dealObjectString(val);
            console.log(val, 'val')

        }
        if (pre[key]) {
            pre[key] = Array.isArray(pre[key]) ? [...pre[key], val] : [pre[key], val];
        } else {
            pre[key] = val;
        }
        return pre;
    }, {})
};

export default parseString;
