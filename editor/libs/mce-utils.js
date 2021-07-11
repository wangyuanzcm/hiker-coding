export const findParentChoiceElem = function(t) {
    "use strict";
    for (var e = t.parentElement, n = e.classList; e && !n.contains("example-choice");) n = (e = e.parentElement).classList;
    return e
}
export const isPropertySupported= function(t) {
    "use strict";
    if (void 0 === t.property) return !0;
    for (var e = t.property.split(" "), n = !1, r = document.createElement("div"), i = 0, o = e.length; i < o; i++) void 0 !== r.style[e[i]] && (n = !0);
    return n
}
export const openLinksInNewTab= function(t) {
    t.forEach(function(t) {
        t.addEventListener("click", function(e) {
            e.preventDefault(), window.open(t.href)
        })
    })
}
export const postToKuma= function(t) {
    window.parent.postMessage(t, "*")
}
export const scrollToAnchors= function(t, e) {
    e.forEach(function(e) {
        e.addEventListener("click", function(n) {
            n.preventDefault(), t.querySelector(e.hash).scrollIntoView()
        })
    })
}
export const showCustomExampleHTML= function(t) {
    "use strict";
    var e = document.getElementById("default-example");
    e.classList.add("hidden"), e.setAttribute("aria-hidden", !0), t.classList.remove("hidden"), t.setAttribute("aria-hidden", !1)
}