var express = require('express')

var app = new express()

var bodyParser = require('body-parser') //获取post提交的数据

var express = require('express')
var cookieParser = require('cookie-parser')

app.get('/', function (req, res) {
    res.send("hello express")
})
app.get('/news', function (req, res) {
    res.send("hello news")
})
//动态路由
app.get('/newscontent/:aid', function (req, res) {
    console.log(req.params.aid)
    res.send("hello news")
})
//get传值
app.get('/product', function (req, res) {
    console.log(req.query.id)
    res.send("hello product")
})

//使用ejs
app.set('view engine', 'ejs')
app.set('views', './views')
//静态资源 内置中间件
// app.use(express.static('views/static'))
//虚拟路由，静态资源
app.use('/static', express.static('views/static'))
//cookie使用
// app.use(cookieParser())
app.use(cookieParser('secret11'))
//中间件 拦截器，权限判断等应用
app.use((req, res, next) => {
    console.log(req.cookies)
    console.log('Signed Cookies: ', req.signedCookies)
    console.log(new Date())
    next() //继续向下执行
})

//监听，端口大于3000
app.get('/index', function (req, res) {
    res.cookie("username", 'luonan', { maxAge: 60000, httpOnly: true, signed: true })
    res.render('index', { msg: '<h2>我是首恶，哈哈</h2>' })
})
app.get('/login', function (req, res) {
    res.render('login2', { msg: '<h2>我是首恶，哈哈</h2>' })
})
//第三方中间件
// create application/json parser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/dologin', urlencodedParser, function (req, res) {
    if (req.body) {
        console.log(req.body)
        res.send("注册成功" + req.body.usrname)
    } else {
        console.log(req.body)
        res.status(400).send('错误')
    }
})
//404
app.use((req, res, next) => {
    res.status(404).send('404')
})
//cookie

app.listen(3000, '127.0.0.1')