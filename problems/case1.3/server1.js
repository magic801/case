let http = require('http')
let fs = require('fs')

let port = 3211

let server = http.createServer((req, res) => {
  res.end(`hello to ${port}`)
})

server.listen(port, () => {
  console.log(`${port} start.`)
})

let binding = process.binding('compile')
console.log(binding)
