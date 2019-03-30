let http = require('http')
let fs = require('fs')
let path = require('path')

http.createServer((req, res) => {
	console.log(req.url)

	res.setHeader('Access-Control-Allow-Origin', 'http://demon.like.com')
	// res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
 //  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  // let data = fs.readFileSync(path.join(__dirname, './images/1.png'))
  let biaoqian = '<p>this is from nodejs</p>'
  let data = fs.readFileSync(path.join(__dirname, './html/t1.html'))
  console.log(data + biaoqian)
	res.write(data + biaoqian)
	res.end()
}).listen(8080)