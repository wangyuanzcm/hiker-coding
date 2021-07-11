"use strict";

import { isDefined } from './feature-detector';
import './console';//这里的console是改造了console函数，并非实际导出项,所以直接引用并运行；
import {register } from './events';
import { } from './mce-utils';

var s = document.getElementById("static-js"),
    c = s.dataset.feature,
    l = document.getElementById("execute"),
    d = document.querySelector("#console code"),
    u = document.getElementById("reset");

// var e, n, r = t("./editor-libs/feature-detector.js"),
//     i = t("./editor-libs/console"),
//     o = t("./editor-libs/events.js"),
//     a = t("./editor-libs/mce-utils"),
//     s = document.getElementById("static-js"),
//     c = s.dataset.feature,
//     l = document.getElementById("execute"),
//     d = document.querySelector("#console code"),
//     u = document.getElementById("reset");

function f() {
    !(function (t) {
        d.classList.add("fade-in");
        try {
            new Function(t)()
        } catch (t) {
            d.textContent = "Error: " + t.message
        }
        d.addEventListener("animationend", function () {
            d.classList.remove("fade-in")
        })
    })(e.getDoc().getValue())
}

// if(!document.all && isDefined(c)){
//     document.documentElement.classList.add("js")
// }
// if(s.dataset.height){
//     document.getElementById("editor").classList.add(s.dataset.height)
// }
// document.getElementById("static").classList.add("hidden");
// document.getElementById("live").classList.remove("hidden");
    // i(),
   register();

    let editor = document.getElementById("editor");
    let e = CodeMirror(editor, {
        autofocus: !0,
        inputStyle: "contenteditable",
        lineNumbers: !0,
        mode: "javascript",
        undoDepth: 5,
        tabindex: 0,
        value: s.textContent,
    });
    
    
    l.addEventListener("click", function () {
        (d.textContent = ""), f()
    });
    u.addEventListener("click", function () {
        window.location.reload()
    });
    // if(performance){
    //     document.addEventListener("readystatechange", function (t) {
    //         "complete" === t.target.readyState && setTimeout(function () {
    //             o.trackloadEventEnd("JS editor load time", performance.timing.loadEventEnd), a.postToKuma({
    //                 markName: "js-ie-load-event-end"
    //             }), e.refresh()
    //         }, 200)
    //     })
    // }