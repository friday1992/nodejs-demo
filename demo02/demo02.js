var http = require('http')
var str = require('./config')
var foo = require('foo1')
http.createServer(function (req, res) {
    //自定义属性，通过export暴露出来
    console.log(str)
    //如果模块定义在node_modules下面，可以直接引用名字
    console.log(foo)
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
    res.write("demo2中文")
    res.end()
}).listen(8001, '127.0.0.1')