
//读取配置文件，确定后缀名对应的内容
var path = require('path')
var fs = require('fs')
var getname2 = function (name) {

    var exname = path.extname(name)
    console.log(exname)
    var data = fs.readFileSync('./resource/mime.json')
    var json = JSON.parse(data.toString())
    console.log(json[exname]);
    return json[exname]
}
module.exports = getname2