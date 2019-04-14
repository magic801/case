let fs = require('fs')

let aj = {
	name: 'aj',
	exports: null
}

let cache = {}

function reqJs(path) {
	if (!cache[path]) {
		let data = fs.readFileSync(path, 'utf8')
		let code = '(function (module) {' + data + '}) (aj)'
		eval(code)
		cache[path] = aj.exports
	}

	return cache[path]
}

let c1 = reqJs('./t1.js')
let c2 = reqJs('./t1.js')

c1('33')