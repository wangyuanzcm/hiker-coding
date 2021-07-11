"use strict";

export const formatArray = function(t) {
    for (var e = "", n = 0, r = t.length; n < r; n++)"string" == typeof t[n] ? (e += '"' + t[n] + '"') : Array.isArray(t[n]) ? ((e += "Array ["), (e += this.formatArray(t[n])), (e += "]")) : (e += this.formatOutput(t[n])), n < t.length - 1 && (e += ", ");
    return e
}
export const formatObject= function(t) {
    var e = t.constructor.name;
    if ("String" === e) return `String {
        "${t.valueOf()}"
    }`;
    if (t === JSON) return "JSON {}";
    if (e.match(/^(ArrayBuffer|SharedArrayBuffer|DataView)$/)) return e + " {}";
    if (e.match(/^(Int8Array|Int16Array|Int32Array|Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array|BigInt64Array|BigUint64Array)$/)) return t.length > 0 ? e + " [" + this.formatArray(t) + "]" : e + " []";
    if ("Symbol" === e && void 0 !== t) return t.toString();
    if ("Object" === e) {
        var n = "",
            r = !0;
        for (var i in t) t.hasOwnProperty(i) && (r ? (r = !1) : (n += ", "), (n = n + i + ": " + this.formatOutput(t[i])));
        return e + " { " + n + " }"
    }
    return t
}
export const formatOutput= function(t) {
    return void 0 === t || null === t || "boolean" == typeof t ? String(t) : "number" == typeof t ? Object.is(t, -0) ? "-0" : String(t) : "bigint" == typeof t ? String(t) + "n" : "string" == typeof t ? t.includes('"') ? "'" + t + "'" : '"' + t + '"' : Array.isArray(t) ? "Array [" + this.formatArray(t) + "]" : this.formatObject(t)
}
export const writeOutput= function(t) {
    var e = document.querySelector("#console code"),
        n = e.textContent,
        r = "> " + t + "\n";
    e.textContent = n + r
}