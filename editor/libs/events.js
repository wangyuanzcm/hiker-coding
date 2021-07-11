
import {trackEvent,trackRunClicks} from './analytics';
import {} from './clippy';
import {} from './css-editor-utils';
import {findParentChoiceElem} from './mce-utils';
function s(t) {
    "use strict";
    var e = window.getSelection().getRangeAt(0);
    t.preventDefault(), t.stopPropagation(), t.clipboardData.setData("text/plain", e.toString()), t.clipboardData.setData("text/html", e.toString())
}

function c(t) {
    "use strict";
    var e = t.clipboardData.getData("text/plain"),
        n = t.target.offsetParent.querySelector("code"),
        r = n.textContent;
    t.preventDefault(), t.stopPropagation(), (n.innerText = r + "\n" + e), Prism.highlightElement(n)
}

export const onChoose= function(t) {
    var e = document.querySelector(".selected");
    if (e && !t.classList.contains("selected")) {
        var n = Prism.highlight(e.firstChild.textContent, Prism.languages.css);
        (e.firstChild.innerHTML = n), o.trackCSSExampleSelection(), i.resetDefault()
    }
    i.choose(t), r.toggleClippy(t)
}
export const register= function() {
    "use strict";
    var t = document.getElementById("example-choice-list"),
        n = document.getElementById("editor");
    !(function() {
        window.onerror = function(t, e, n, r, i) {
            var a = ["URL: " + e, "Line: " + n, "Column: " + r, "Error object: " + JSON.stringify(i), ].join(" - ");
            trackEvent({
                category: "Interactive Example - JavaScript Errors",
                action: a,
                label: t,
            })
        }
    })();
    t && ((function() {
        window.addEventListener("message", function(t) {
            if (void 0 !== t.data.smallViewport) {
                var e = document.querySelector(".editor-wrapper");
                t.data.smallViewport ? e.classList.add("small-desktop-and-below") : e.classList.remove("small-desktop-and-below")
            }
        }, !1)
    })()(function(t) {
        t.addEventListener("cut", s), t.addEventListener("copy", s), t.addEventListener("paste", c), t.addEventListener("keyup", function(t) {
            var e = t.target.parentElement;
            i.applyCode(e.textContent, e)
        }), t.addEventListener("click", function(t) {
            var n = t.target;
            n.classList.contains("example-choice") || (n = findParentChoiceElem(n)), n.classList.contains("copy") && trackEvent({
                category: "Interactive Example - CSS",
                action: "Copy to clipboard clicked",
                label: "Interaction Events",
            }), e.exports.onChoose(n)
        })
    })(t));
    n && (function(t) {
        t.addEventListener("click", function(t) {
            "execute" === t.target.id && trackRunClicks()
        })
    })(n)
}
export const trackloadEventEnd= function(t, e) {
    trackEvent({
        category: "Interactive Examples",
        action: t,
        label: "Performance Events",
        value: e,
    })
}