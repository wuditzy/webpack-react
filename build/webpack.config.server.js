
const path = require('path')//绝对路径书写
module.exports = {//webpack 的配置对象
    target:'node',//
    entry:{//应用入口 
        // app.js 里面引用App.jsx 把他 amount 到html里面去
        app:path.join(__dirname,"../client/server-entry.js")
    },
    output:{//打包输出
        filename:'server-entry.js',
        path:path.join(__dirname,'../dist'),
        publicPath:'/public',//       /app.hash.js -》/publish/app.hash.js
        libraryTarget:'commonjs2'
    },
    module:{
        rules:[
            {
                enforce:'pre',
                test:/.(js|jsx)/,
                loader:'eslint-loader',
                exclude:[
                    path.resolve(__dirname,'../node_modules')
                ]
            },{
                test:/.jsx$/, //那种类型的文件 使用特定的loader 加载他
                loader:'babel-loader'
            },{
                test:/.js$/, //那种类型的文件 使用特定的loader 加载他
                loader:'babel-loader',
                exclude:[
                    path.join(__dirname,'../node_modules')
                ]
            }
        ]
    }
}


