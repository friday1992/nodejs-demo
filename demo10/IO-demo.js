var fs = require('fs')
//使用回调函数处理异步
var getname = function (callback) {
    fs.readFile('./resource/mime.json', (err, data) => {
        callback(data)
    })
}
getname(function (data) {
    console.log(data.toString())
})
//如果不处理异步输出的是undefined
// var getname = function () {
//     fs.readFile('./resource/mime.json', (err, data) => {
//         // console.log(data.toString())
//         return data.toString()
//     })
// }
// console.log(getname())