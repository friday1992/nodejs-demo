var path = require('path')
var getname = function (name) {
    var exname = path.extname(name)
    switch (exname) {

        case '.html':
            return 'text/html'
        case '.js':
            return 'text/javascript'
        case '.css':
            return 'text/css'
        default:
            return 'text/html'
    }

}
module.exports = getname