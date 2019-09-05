let http = require('http')
let httpProxy = require('http-proxy')

let proxy = httpProxy.createProxyServer()

proxy.on('proxyReq', () => {
	console.log('get proxy request.')
})

http.createServer((req, res) => {
	proxy.web(req, res, {
		target: 'http://localhost:8080'
	}, (e) => {
		console.log('err')
	})
}).listen(80)
