let http = require('http')
let fs = require('fs')

let port = 3211

let server = http.createServer((req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Origin', 'http://10.0.106.223:3212')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Methods', 'PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.end(`hello to ${port}`)
})

server.listen(port, () => {
  console.log(`${port} start.`)
})

// let binding = process.binding('compile')
// console.log(binding)
