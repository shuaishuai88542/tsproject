"use strict";

module.exports = {
  //编译入口文件
  entry: "./src/index.ts",
  //指定编译完输出文件
  output: {
    filename: "main.js"
  },
  resolve: {
    //自动解析后缀拓展
    extensions: ['.ts', '.tsx', '.js']
  }
};