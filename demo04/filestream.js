var fs = require('fs')
//用流读取文件
var resdstream = fs.createReadStream('t.text')
var str = ''
resdstream.on('data', function (chunk) {
    console.log("开始读取")
    str += chunk
})
resdstream.on('end', function () {
    console.log("读取结束")
    console.log(str)
})
resdstream.on('error', function (chunk) {
    console.log(chunk)
})
//用流写入数据
var data = "给法国代购111"
var writestream = fs.createWriteStream('1.txt')
writestream.write(data, 'utf-8')
writestream.on("finish", function () {
    console.log("写入完成")
})
// writestream.end();//标记写入完成
//使用piple写入数据
resdstream.pipe(writestream)