

export const editTimer = void 0;
export const applyCode = function (t, e, n) {
    var r = n || document.getElementById("example-element");
    t.replace(/(\/\*)[\s\S]+(\*\/)/g, ""), (r.style.cssText = t), clearTimeout(this.editTimer), (this.editTimer = setTimeout(function () {
        r.style.cssText ? e.parentNode.classList.remove("invalid") : e.parentNode.classList.add("invalid")
    }, 500))
}
export const choose = function (t) {
    var n = t.querySelector("code");
    t.classList.add("selected"), n.setAttribute("contentEditable", !0), n.setAttribute("spellcheck", !1), e.exports.applyCode(n.textContent, t)
}
export const resetDefault = function () {
    var t = document.getElementById("default-example"),
        n = document.getElementById("output");
    if (t.classList.contains("hidden")) {
        for (var r = n.querySelectorAll("section"), i = 0, o = r.length; i < o; i++) r[i].classList.add("hidden"), r[i].setAttribute("aria-hidden", !0);
        t.classList.remove("hidden"), t.setAttribute("aria-hidden", !1)
    }
    e.exports.resetUIState()
}
export const resetUIState = function () {
    for (var t = document.getElementById("example-choice-list").querySelectorAll(".example-choice"), e = 0, n = t.length; e < n; e++) t[e].classList.remove("selected")
}