
const path = require('path')//绝对路径书写
const HtmlWebpackPlugin = require('html-webpack-plugin')//生成html 页面  同时webpack 编译的时候把我们生成的entry 都注入到html里面
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'
const config = {//webpack 的配置对象
  entry: {//应用入口
    // app.js 里面引用App.jsx 把他 amount 到html里面去
    app: path.join(__dirname, "../client/app.js")
  },
  output: {//打包输出
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public'//       /app.hash.js -》/publish/app.hash.js
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      }, {
        test: /.jsx$/, //那种类型的文件 使用特定的loader 加载他
        loader: 'babel-loader'
      }, {
        test: /.js$/, //那种类型的文件 使用特定的loader 加载他
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../client/template.html")
    })
  ]
}

if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {

}


module.exports = config






