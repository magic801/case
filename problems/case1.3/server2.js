let http = require('http')
let fs = require('fs')
let path = require('path')

let port = 3212

let server = http.createServer((req, res) => {
  console.log(req)
  res.end(fs.readFileSync(path.join(__dirname, './index.html')))
})

server.listen(port, () => {
  console.log(`${port} start.`)
})
