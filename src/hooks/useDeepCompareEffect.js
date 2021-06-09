/**
 * React对对象进行深比较
 * @param {*} effect
 * @param {*} deps
 */
import { useEffect, useRef } from 'react';
const isObject = (obj) => {
    return typeof obj === "object" && obj !== null;
};
const isDeepEqual = (obj1, obj2) => {
    if (!isObject(obj1) || !isObject(obj2)) return obj1 === obj2;
    if (obj1 === obj2) return true;
    let keys1 = Object.keys(obj1),
        keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key in obj1) {
        const res = isDeepEqual(obj1[key], obj2[key]);
        if (!res) {
            return false;
        }
    }
    return true;
};

const useDeepCompareEffect = (effect, deps) => {
    const ref = useRef(undefined);
    if (!ref.current || !isDeepEqual(deps, ref.current)) {
        ref.current = deps;
    }
    useEffect(effect, ref.current);
};

export default useDeepCompareEffect;
