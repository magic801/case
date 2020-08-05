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

app.use(express.static(path.join(__dirname, './images')))

app.get('/', function (req, res) {
  let html = fs.readFileSync(path.join(__dirname, './index.html'))
  html += `
  <script src= '//static.iqiyi.com/js/common/vconsole.js'></script>
    <script type="text/javascript">
        new VConsole()
    </script>
  `
  console.log(html.toString())
  res.end(html)
})

app.get('*', function (req, res) {
  // console.log(req.headers)
  res.end('haha')
})

app.set('port', 8004)

app.listen(app.get('port'), () => {
  console.log('listen: 8004')
})
