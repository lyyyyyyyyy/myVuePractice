// 在Webpack的配置文件中，可以写任何符合Node规范的代码
// 因为，webpack 就是基于Node构建出来的前端自动化工具
var path = require('path')
// 一般，如果使用 webpack 的插件，都是先 导入这个插件，然后，在 plugins 节点下，添加一些插件的配置即可
var htmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

// 向外暴露一个配置对象
module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 指定入口文件
  output: { // 打包的输出选项
    path: path.join(__dirname, './dist'), // 指定输出路径
    filename: 'bundle.js' // 指定输出文件名称
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定模板页面
      filename: 'index.html' // 指定在内存中生成的页面的名称
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:3001', browser: 'chrome' })
  ],
  module: { // 配置第三方loader模块
    rules: [ // 匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理CSS的loader
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //处理Less的loader
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, //处理 sass文件的loader
      { test: /\.(png|gif|jpg|bmp|jpeg)$/, use: 'url-loader' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude:/node_modules/ }, // 配置转换高级JS语法的 loader, 注意： 必须添加 exclude 排除项  exclude:/node_modules/
      { test: /\.vue$/, use: 'vue-loader' },//配置处理 vue 文件的loader
    ]
  }
}