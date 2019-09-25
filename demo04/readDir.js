var fs = require('fs')
//读取node_modules下面所有目录
var array = []
fs.readdir('node_modules', (error, data) => {
    if (error) {
        console.log(error)
    } else {

        //使用匿名自执行函数
        (function getFile(i) {
            //判断是否停止
            if (i == data.length) {
                console.log(array)
                return false;
            }
            fs.stat('node_modules/' + data[i], (err, data1) => {
                if (err) {
                    console.log(err)
                } else {
                    if (data1.isDirectory) {
                        array.push(data[i])
                        getFile(i + 1)
                    }
                }
            })
        })(0)
    }

})