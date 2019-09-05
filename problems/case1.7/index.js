const express = require('express') 
const path = require('path')
const fs = require('fs')
const expressAntiLeech = require('express-anti-leech')

const app = express()

let hosts = ['localhost', 'localhost:8004']

app.use(expressAntiLeech({
  allow: hosts,
  exts: ['.gif', '.png'],
  log: console.log,
  default: path.join(__dirname, './images/default.png')
}))

app.get('*', function (req, res) {
  console.log(req.headers)
  res.end('haha')
})
app.set('port', 8004)

app.listen(app.get('port'), () => {
  console.log('listen: 8004')
})
