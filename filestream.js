var fs = require('fs')
//用流读取文件
var resdstream = fs.createReadStream('t.text')
var str = ''
resdstream.on('data', function (chunk) {
    str += chunk
})
resdstream.on('end', function (chunk) {
    console.log(str)
})
resdstream.on('error', function (chunk) {
    console.log(chunk)
})
//用流写入数据
var data = "gagdagagfgdag给法国代购"
var writestream = fs.createWriteStream('1.txt')
// writestream.write(data, 'utf-8')
// writestream.end();//标记写入完成

writestream.on("finish", function () {
    console.log("写入完成")
})
//使用piple写入数据
resdstream.pipe(writestream)