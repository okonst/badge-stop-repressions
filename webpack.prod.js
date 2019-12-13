const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "bundle": "./src/index.js",
    "stop-repressions": "./src/stop-repressions.js",
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
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "[name].js"
  },
};