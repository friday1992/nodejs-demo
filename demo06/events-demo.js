var events = require('events')
var fs = require('fs')
var eventEmitter = new events.EventEmitter()
eventEmitter.on('to_parent', (data) => {
    console.log("接听到了广播" + data)
})
setTimeout(() => {
    eventEmitter.emit('to_parent', '123')
}, 2000)

var getMine = function () {
    fs.readFile('./resource/mime.json', (err, data) => {
        console.log('读取数据')
        eventEmitter.emit("on-mine", data)
    })

}
getMine()
eventEmitter.on('on-mine', (data) => {
    console.log(data.toString())
})