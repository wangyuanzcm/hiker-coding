import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import Container from "./container";
import "react-tippy/dist/tippy.css";//悬浮框组件库样式

ReactDOM.render(<Container />, document.getElementById("root"));

//此处添加热更新
if ((module as any).hot) {
  (module as any).hot.accept("./container", () => {
    const NextApp = require("./container").default;
    ReactDOM.render(<Container />, document.getElementById("root"));
  });
}
