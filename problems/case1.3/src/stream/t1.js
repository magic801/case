var http = require('http')
var fs = require('fs')
var path = require('path')
var zlib = require('zlib')

const fileName = path.join(__dirname, './bigFile.txt')

http.createServer((req, res) => {
  // fs.createReadStream(fileName).pipe(res)
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err
    }

    res.end(data)
  })
}).listen(3000)

http.createServer((req, res) => {
  res.writeHead(200, {
    'content-encoding': 'gzip'
  })
  fs.createReadStream(fileName).pipe(zlib.createGzip()).pipe(res)
  .on('finish', () => {
    console.log('done.')
  })
}).listen(3001)
