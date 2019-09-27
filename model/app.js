var http = require('http')
var url = require('url')
var G = {}
var app = function (req, res) {
    var pathname = url.parse(req.url).pathname.replace('/', '')
    console.log('path:' + pathname)
    if (G[pathname]) {
        //执行注册方法
        G[pathname](req, res)
    }
}
app.get = function (string, callback) {
    G[string] = callback
}
app.get('login', function (req, res) {
    console.log('login')
    res.end('login')
})
app.get('register', function (req, res) {
    console.log('register')
    res.end('register')
})
// setTimeout(function () {
//     console.log('start')
//     app('req', 'res')
// }, 3000)

// http.createServer(app).listen(8004)
module.exports = server

