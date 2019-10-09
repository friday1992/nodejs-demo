//封装的一个静态文件访问
var http = require('http')
var ejs = require('ejs')
var url = require('url')
var dbreturn = require('../demo11/server.js')




//引入封装的路由
var staticrouter = require('../model/router.js')
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname
    var methods = req.method.toLowerCase()
    console.log(pathname)

    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    if (pathname == '/login') {
        var list = [11, 22, 33]
        dbreturn().then((data) => {
            console.log(11)
            console.log(data)
            ejs.renderFile('views/login.ejs', { msg: data, list: list, data: data }, (err, result) => {
                if (err) {
                    console.log(err)
                }
                res.write(result)
                res.end()
            })
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