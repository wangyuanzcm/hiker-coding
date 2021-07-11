"use strict";
export const isDefined = function(type) {
    var e = void 0;
        switch (type) {
        case "array-entries":
            e = Array.prototype.entries;
            break;
        case "shared-array-buffer":
            e = window.SharedArrayBuffer
        }
        return e;
}
