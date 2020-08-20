
const axios = require('axios')
const webpack = require('webpack')
const MemoryFS = require('memory-fs')
const path = require('path')
const serverConfig = require('../../build/webpack.config.server.js')
const ReactDomServer = require('react-dom/server')

// const proxy = require('http-proxy-middleware')//express的中间件
// 0.x.x版本的引用方式
// const proxy = require('http-proxy-middleware');
// 1
// 1.0.0版本的引用方式
const { createProxyMiddleware } = require('http-proxy-middleware');



const getTemplate = ()=>{
    return new Promise((resolve,reject)=>{
        axios.get('http://localhost:8888/public/index.html').then(res=>{
            resolve(res.data)
        }).catch(reject)
    })
}

const Module = module.constructor

const mFS = new MemoryFS
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mFS
let serverbundle
serverCompiler.watch({},(err,stats)=>{
    if(err) throw err
    stats = stats.toJson()
    stats.errors.forEach(err=>{console.error(err)})
    stats.warnings.forEach(war =>{console.warn(war)})
    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
    )
    const bundle = mFS.readFileSync(bundlePath,'utf-8')
    const m = new Module()
    m._compile(bundle,'server-entry.js')
    serverbundle = m.exports.default
})


module.exports = function(app){

    app.use(createProxyMiddleware('/public', { target: 'http://localhost:8888' }));
    // app.use('/public',createProxyMiddleware({
    //     target:'http://localhost:8888'
    // }))
    app.get('*',function(req,res){
        getTemplate().then(template=>{
            const content = ReactDomServer.renderToString(serverbundle)
            res.send(template.replace('<!-- app -->',content))
        })
    })
}





