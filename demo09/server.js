var http = require('http')
var url = require('url')
var app = require('../model/router.1')
var fs = require('fs')
http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname.replace('/', '')
    console.log(pathname)
    try {
        if (pathname != 'favicon.ico' || pathname != 'css/public.css') {
            console.log(1111)
            app[pathname](req, res)
        }
    } catch (err) {
        console.log(err)
        fs.readFile('static/404.html', (error, result) => {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            res.write(result)
            res.end()
        })
    }

}).listen(8003)