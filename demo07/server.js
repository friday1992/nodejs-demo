//封装的一个静态文件访问
var http = require('http')
//引入封装的路由
var staticrouter = require('../model/router.js')
http.createServer(function (req, res) {
    //这样看上去简洁不少
    staticrouter(req, res, 'static')
}).listen(8002)