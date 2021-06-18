/**
 * 手写一个JSON.stringify和JSON.parse
 * 这里只是一个简单的实现，有些测试用例是跑不通的，仅作为参考
 * 
 * 对付xss
 *  var rx_one = /^[\],:{}\s]*$/;
 *  var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
 *  var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
 *  var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
 *  if (
 *      rx_one.test(
 *          json
 *              .replace(rx_two, "@")
 *              .replace(rx_three, "]")
 *              .replace(rx_four, "")
 *      )
 *  ) {
 *      var obj = eval("(" +json + ")");
 *  }
 *  Function版本
 * var jsonStr = '{ "age": 20, "name": "jack" }'
 * var json = (new Function('return ' + jsonStr))();
 * 状态机版见PDF: https://github.com/youngwind/blog/issues/115
 * @link: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
 * @param {*} value[, replacer [, space]]
 */ 
const jsonStringify = (obj) =>{
    let type = typeof obj;
    if(type !== 'object'||type==='null'){
        if(/string|undefined|function/.test(type)){
            obj = '"'+obj+'"'
        }
        return String(obj)
    }else{
        let json = [];
        let arr = (obj&&obj.constructor === Array) ;
        for(let k in obj){
            let v = obj[k];
            let type  = typeof v;
            if(/string|undefined|function/.test(type)){
                v = '"'+v+'"'
            }else if(type === "object"){
                v= jsonStringify(v)
            }
            json.push((arr?"":'"'+k+'":')+String(v))
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
    }
};
const jsonParse = (opt) =>{
    return eval('('+opt+')')
};
export {jsonStringify,jsonParse};
