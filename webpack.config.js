const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";
const src_dir = __dirname + "/src";
const dist_dir = __dirname + "/dist";

module.exports = {
  entry: [src_dir + "/index.jsx"],
  output: {
    path: dist_dir,
    publicPath: "/",
    filename: "bundle.js",
  },
  devtool: devMode ? "inline-source-map" : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
          options: { minimize: false },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: src_dir + "/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
    new CompressionPlugin({
      test: /\.jsx(\?.*)?$/i,
      filename: "[path][query]",
      algorithm: "gzip",
      deleteOriginalAssets: false,
    }),
  ],
  devServer: {
    static: dist_dir,
    hot: true,
    port: 9000,
  },
};
