


# 单页应用
    
# 多页应用
    特征 所有内容都是由服务端用模板生成   模板 - php .net java
        每次页面跳转都要经过服务端
        js 更多只是动画
        模块化工具 seajs（amd标准） requirejs （cmd标准） amd和cmd 标准 这两个基本都淘汰了我们一般有使用 commonjs（nodejs 加载的标准）
    静态文件的处理  使用 gulp 或grunt手动编译html中，自由度低，操作复杂，或者甚至不处理 交给后端 让后端服务处理




# 架构工具 npm bower jspm
# 模块化工具 webpack 
# 工程架构 --业务代码


# web 开发常用网络优化
- 优化方法
    * 合并资源文件 减少http 请求
    * 压缩资源文件大小
    * 合理利用缓存机制（网站开发是阶段性的） 尽可能使用缓存减少请求  --打包后 根据更新来利用哈希值
# 构建webpack 的基础配置
    资源模块打包器 
- npm init 初始化  通过它生成package.json文件来告诉我们  所依赖的npm 包
- npm i webpack
- npm i reack
- 文件夹build --会放配置文件 ，webpack config 的文件  以及其他的在工程里需要的脚本文件
    * webpack.config.js 配置我们webpack 的一些内容
- client 前端应用文件
    * app.js 作文应用入口 amount 到我们的html 里面
    * App.jsx 声明我们整个应用的页面上面的一些内容
- 安装 react-dom
- 安装 babel-loader babel-core 配置 .babelrc
- 安装 babel-preset-es2015 babel-preset-es2015-loose babel-preset-react
- babel-core 6版本对应babel-loader 7 （如果babel-loader版本是8 那么会报错
- 安装html-webpack-plugin

# 服务端渲染的基础设置
- 单页面应用存在的问题
- 因为 SEO  抓取引擎不好，首次请求时间较长，用户体验不友好 （react-dom是react 专门为web端开发的渲染工具，我们可以在客户端时候react-dom的render 方法渲染组件，而在服务端 react-dom/server 给我们提供将react 组件渲染成html 的方法）

- 安装rimrif打包后覆盖dist 里的文件 



# 开发时常用的配置
- webpack-dev-server 通过webpack 的配置去启动一个服务器
- hot module replacement 编辑工程的时候改变代码，它可以在浏览器中无刷新的  呈现编辑之后的效果
npm view jquery versions 查看版本

- 代码规范 eslint editconfig
    * eslint、
        
    * editconfig






















