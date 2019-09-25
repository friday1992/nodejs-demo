//可以在npm官网上找到各种各样的工具包，并引入项目
var sd = require('silly-datetime');
var date = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
console.log(date)