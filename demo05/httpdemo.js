//利用http ,fs url和自定义模块
var http = require('http')
var fs = require('fs')
var url = require('url')
var exuitl = require('../model/exname')
var exuitl2 = require('../model/exname2.0')

http.createServer(function (req, res) {
    var pathName = url.parse(req.url).pathname
    if (pathName == '/') {
        pathName = '/index.html'
    }
    if (pathName != '/favicon.ico') {
        fs.readFile('static' + pathName, (err, result) => {
            if (err) {
                console.log(err)
                //找不到页面跳到404
                fs.readFile('./static/404.html', (err, data) => {
                    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" })
                    res.write(data)
                    res.end()
                })
            } else {
                //获取后缀名
                var content = exuitl2(pathName)
                res.writeHead(200, { "Content-Type": "" + content + ";charset='utf-8'" })
                res.write(result)
                res.end()
            }
        })
    }
}).listen(9001, '127.0.0.1')