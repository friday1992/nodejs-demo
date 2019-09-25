# nodejs-demo
my record of learn nodejs
1.一个简单的Hello World nodejs程序
```
var http = require('http');
var url = require('url');
http.createServer(function(req,res){
    console.log(req.url)
    //true是转换成对象
    var result = url.parse(req.url,true)
    console.log(result)
    console.log(result.query.id)
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})
    res.write("hello nodejs11")
    res.end()
}).listen(8001)
```
