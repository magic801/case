const fs = require('fs')
const http2 = require('http2')

const options = {
  key: fs.readFileSync('./ssl/rsa_private.key'),
  cert: fs.readFileSync('./ssl/cert.crt')
}

http2.createSecureServer(options, (req, res) => {
  res.writeHead(200)
  res.end('hello baby!')
}).listen(443)
