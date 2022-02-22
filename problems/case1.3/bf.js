var fs = require('fs')

const bstr = new Buffer('k:s')
console.log(bstr.toString('base64'))

var data = fs.readFileSync('./tts.png').toString('base64')
var uri = 'data:image/png;base64,' + data
console.log(uri)
