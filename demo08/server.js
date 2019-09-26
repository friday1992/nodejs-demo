//封装的一个静态文件访问
var http = require('http')
var ejs = require('ejs')
var url = require('url')

//引入封装的路由
var staticrouter = require('../model/router.js')
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname
    var methods = req.method.toLowerCase()
    console.log(pathname)
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    if (pathname == '/login') {
        var data = '我是后台数据'
        var list = [11, 22, 33]
        ejs.renderFile('views/login.ejs', { msg: data, list: list }, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.write(result)
            res.end()
        })
    } else if (pathname == '/dologin' && methods == 'get') {
        //
        console.log(url.parse(req.url).query)
        res.end(url.parse(req.url).query)
    } else if (pathname == '/dologin' && methods == 'post') {
        var str = ""
        req.on('data', function (chunk) {
            str += chunk
        })
        req.on('end', function () {
            res.end(str)
        })
    }
}).listen(8002)