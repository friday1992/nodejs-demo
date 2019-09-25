
//第一个nodejs程序
var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    console.log(req.url)
    var result = url.parse(req.url)
    console.log(result)
    console.log(result.query.id)
    res.writeHead(200, { "Content-type": "text/html;charset='utf-8'" })
    res.write("hello nodejs11")
    res.end()
}).listen(8001)
