//静态文件托管
var fs = require('fs')
var url = require('url')
var exuitl2 = require('../model/exname2.0')

var statics = function (req, res, staticpath) {
    var pathname = url.parse(req.url).pathname
    console.log('path:' + pathname)
    if (pathname == '/') {
        pathname = 'index.html'
    }
    if (pathname != '/favicon.ico') {
        //过滤掉这个没用的请求
        fs.readFile(staticpath + pathname, (err, data) => {
            if (err) {
                fs.readFile('static/404.html', (error, result) => {
                    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
                    res.write(result)
                    res.end()
                })
            } else {
                var content = exuitl2(pathname)
                res.writeHead(200, { "Content-Type": "" + content + ";charset=utf-8" })
                res.write(data)
                res.end()
            }
        })

    }
}
module.exports = statics