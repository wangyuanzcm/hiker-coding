const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: resolve(__dirname, "../src/index.js"),
  output: {
    path: resolve(__dirname, "../dist"),
    filename: "client.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: resolve(__dirname, "../dist"),
    port: 8000,
    /* 当使用 HTML5 History API 时, 所有的 404 请求都会响应 index.html 的内容。
     * 将 devServer.historyApiFallback 设为 true开启：
     **/
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../public/index.html"),
    }),

  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
};

