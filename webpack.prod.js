const path = require("path");
const webpack = require("webpack");
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    "bundle": "./src/index.js",
    "stop-repressions-banner": "./src/stop-repressions-banner.js",
    "stop-repressions-badge": "./src/stop-repressions-badge.js",
  },
  mode: "production",
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
            //outputPath:'./image/',
            outputPath: (url, resourcePath, context) => {
              // `resourcePath` is original absolute path to asset
              // relative path
              const relativePath = path.relative('./public/image/', resourcePath);
              return `image/${relativePath}`;
            },
          }
        },
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    //publicPath: "/dist/",
    publicPath: "./",
    filename: "[name].js"
  },
};