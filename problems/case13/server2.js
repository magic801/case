let http = require('http')

let port = 3212

let server = http.createServer((req, res) => {
  res.end(`hello to ${port}`)
})

server.listen(port, () => {
  console.log(`${port} start.`)
})
