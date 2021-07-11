const formatArray = function (t) {
    for (var e = "", n = 0, r = t.length; n < r; n++) {
        if ("string" == typeof t[n]) {
            e += '"' + t[n] + '"'
        } else if (Array.isArray(t[n])) {
            e += "Array [";
            e += formatArray(t[n]);
            e += "]";
        } else {
            e += formatOutput(t[n])
        }
        n < t.length - 1 && (e += ", ")
    }
    return e
}
const formatObject = function (t) {
    var e = t.constructor.name;
    if ("String" === e) return `String {
        "${t.valueOf()}"
    }`;
    if (t === JSON) return "JSON {}";
    if (e.match(/^(ArrayBuffer|SharedArrayBuffer|DataView)$/)) {
        return e + " {}";
    }
    if (e.match(/^(Int8Array|Int16Array|Int32Array|Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array|BigInt64Array|BigUint64Array)$/)) {
        return t.length > 0 ? e + " [" + formatArray(t) + "]" : e + " []";
    }
    if ("Symbol" === e && void 0 !== t) {
        return t.toString();
    }
    if ("Object" === e) {
        var n = "",
            r = !0;
        for (var i in t) {
            if (t.hasOwnProperty(i)) {
                if (r) {
                    r = !1
                } else {
                    n += ", ";
                }
                n = n + i + ": " + formatOutput(t[i])
            }
        }
        return e + " { " + n + " }"
    }
    return t
}
const formatOutput = function (t) {
    if (void 0 === t || null === t || "boolean" == typeof t) {
        return String(t);
    } else if ("number" == typeof t) {
        return Object.is(t, -0) ? "-0" : String(t);
    } else if ("bigint" == typeof t) {
        return String(t) + "n";
    } else if ("string" == typeof t) {
        return t.includes('"') ?
            "'" + t + "'" :
            '"' + t + '"'
    } else {
        return Array.isArray(t) ?
            "Array [" + formatArray(t) + "]" :
            formatObject(t)
    }
}
let window = {};
let logs = []
//收集console.log里面的数据信息
console.log = function () {
    for (var t = [], r = 0, i = arguments.length; r < i; r++) {
        var output = formatOutput(arguments[r]);
        t.push(output)
    }
    var a = t.join(" ");
    logs.push(a);
}
//引入jest测试依赖
importScripts('http://localhost:3000/core.js');
const {
    core: { describe, it, expect, run }
} = window.jestLite;
this.onmessage = function (e) {
    let { codeBlock } = e.data;
    new Function("describe", "it", "expect", codeBlock)(describe, it, expect);
    run().then((data) => {
        postMessage({logs,data});
        self.close();
    })
}
