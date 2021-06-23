import { jsonStringify, jsonParse } from '../../../src/practice/polyfil/JSON-string-parse';

describe('jsonStringParse:手写一个JSON.stringify和JSON.parse', () => {
    test(`jsonStringParse:测试stringify的结果`, () => {
        expect(jsonStringify({ x: 5 })).toEqual(JSON.stringify({ x: 5 })); // "{"x":5}"
        expect(jsonStringify([1, "false", false])).toEqual(JSON.stringify([1, "false", false])); // "[1,"false",false]"
        expect(jsonStringify({ b: true })).toEqual(JSON.stringify({ b: true })); // "{\"b\":null}"
    })
    test(`jsonStringParse:测试parse的结果`, () => {
        expect(jsonParse(JSON.stringify({ x: 5 }))).toEqual({ x: 5 })
        expect(jsonParse(JSON.stringify([1, "false", false]))).toEqual([1, "false", false])
        expect(jsonParse(JSON.stringify({ b: true }))).toEqual({ b: true })
    })
});
