const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = env => ({
  entry: './ui/index.tsx',
  mode: env.production ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, '../dist/ui'),
    filename: 'ui.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    before(app) {
      require('mocker-api')(app, path.resolve('./mock/index.js'), {
        //这里可以直接代理到github到api接口上面去
        // proxy: {
        //   '/repos/(.*)': 'https://api.github.com/',
        // },
        // changeHost: true,
      })
    },
    contentBase: path.resolve(__dirname, '../dist/ui'),
    hot: true,
    port: 9000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Majestic',
      template: require('html-webpack-template'),
      appMountId: 'root',
      inject: false,
      favicon: './ui/assets/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: env.production === true,
    }),
  ],
});
