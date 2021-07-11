// [function(t, e, n) {
//     var r = t("./mce-utils");
//     e.exports = {
//         addClippy: function() {
//             "use strict";
//             new Clipboard(".copy", {
//                 target: function(t) {
//                     var e = t.dataset.clipboardTarget;
//                     return e ? document.querySelector(e) : r.findParentChoiceElem(t).getElementsByTagName("code")[0]
//                 },
//             }).on("success", function(t) {
//                 var e = document.getElementById("user-message");
//                 e.classList.add("show"), e.setAttribute("aria-hidden", !1), (function(t, e) {
//                     var n = t.trigger,
//                         r = n.offsetParent.offsetTop + n.clientHeight + 10 + "px",
//                         i = n.offsetLeft + "px";
//                     (e.style.top = r), (e.style.left = i)
//                 })(t, e), window.setTimeout(function() {
//                     e.classList.remove("show"), e.setAttribute("aria-hidden", !0)
//                 }, 1e3), t.clearSelection()
//             })
//         },
//         toggleClippy: function(t) {
//             "use strict";
//             for (var e = t.querySelector(".copy"), n = document.querySelectorAll(".copy"), r = 0, i = n.length; r < i; r++) n[r].classList.add("hidden"), n[r].setAttribute("aria-hidden", !0);
//             e.classList.remove("hidden"), e.setAttribute("aria-hidden", !1)
//         },
//     }
// }, {
//     "./mce-utils": 9
// }, ]

import {findParentChoiceElem} from './mce-utils';
export const addClippy= function() {
    "use strict";
    new Clipboard(".copy", {
        target: function(t) {
            var e = t.dataset.clipboardTarget;
            return e ? document.querySelector(e) : findParentChoiceElem(t).getElementsByTagName("code")[0]
        },
    }).on("success", function(t) {
        var e = document.getElementById("user-message");
        e.classList.add("show"), e.setAttribute("aria-hidden", !1), (function(t, e) {
            var n = t.trigger,
                r = n.offsetParent.offsetTop + n.clientHeight + 10 + "px",
                i = n.offsetLeft + "px";
            (e.style.top = r), (e.style.left = i)
        })(t, e), window.setTimeout(function() {
            e.classList.remove("show"), e.setAttribute("aria-hidden", !0)
        }, 1e3), t.clearSelection()
    })
}
export const  toggleClippy =function(t) {
    "use strict";
    for (var e = t.querySelector(".copy"), n = document.querySelectorAll(".copy"), r = 0, i = n.length; r < i; r++) n[r].classList.add("hidden"), n[r].setAttribute("aria-hidden", !0);
    e.classList.remove("hidden"), e.setAttribute("aria-hidden", !1)
}