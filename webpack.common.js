const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CleanWebpackPluginConfig = new CleanWebpackPlugin();
const ESLintPlugin = require("eslint-webpack-plugin");
const ESLingPluginConfig = new ESLintPlugin();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve("dist"),
    filename: "index.bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig, ESLingPluginConfig, CleanWebpackPluginConfig],
};
