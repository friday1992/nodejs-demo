var fs = require('fs')
fs.stat('demo04', (error, stats) => {
    if (error) {
        console.log(error)
    } else {
        console.log('文件：' + stats.isFile())
        console.log('目录：' + stats.isDirectory())

    }
})
//创建目录
// fs.mkdir('css')
fs.writeFile("t.text", "写入成功111", (error => {
    if (error) {
        console.log(error)
    } else {

    }
}))
// fs.appendFile('t1.txt', "写入内容")
//删除文件
// fs.unlink('t1.txt', (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("删除")
//     }
// })
//读取文件
fs.readFile("t.text", (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log(data.toString())
})
//读取目录
fs.readdir('node_modules', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})
