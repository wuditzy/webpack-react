// npm i express -s


const fs = require('fs')
const path = require('path')
const express = require('express') 
const ReactSSR = require('react-dom/server') 
const { static } = require('express')

const isDev = process.env.NODE_ENV === 'development'


const app = express()




if(!isDev){
    const serverEntry = require('../dist/server-entry.js').default
    const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf-8')
    app.use('/public',express.static(path.join(__dirname,'../dist')))
    app.get('*',function(req,res){
        const appString = ReactSSR.renderToString(serverEntry)
        
        res.send(template.replace('<!-- app -->',appString))
    })//就是从浏览器发出的任何请求 我们都要他返回服务端渲染的代码
}else{
    const devStatic = require('./util/dev-static.js')
    devStatic(app)
}

app.listen(3333,function(){
    console.log('server is listening on 3333')
})
