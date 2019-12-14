const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    "bundle": "./src/index.js",
    "stop-repressions-banner": "./src/stop-repressions-banner.js",
    "stop-repressions-badge": "./src/stop-repressions-badge.js",
    //"index": "./public/index.html",
  },
  mode: "production",
  /*plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],*/
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [ 
            'style-loader',
            'css-loader', 
            'less-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath:'./image/',
          }
        },
      },
      /*{
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }*/
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    publicPath: "./",
    filename: "[name].js"
  },
};