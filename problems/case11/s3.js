// lazy man
function lm (name) {
	return new lazyMan(name)

	function lazyMan (name) {
		this.tasks = []
		let fn = () => {
			console.log(`Hi! This is ${name}`)
			this.next()
		}
	 setTimeout(() => {
	 	fn()
	 })

		return this
	}

	lazyMan.prototype.eat = function (food) {
		let fn = () => {
			console.log(`Eat ${food}`)
			this.next()
		}
		this.tasks.push(fn)
		return this
	}

	lazyMan.prototype.sleep = function (time) {
		let fn = () => {
			setTimeout(() => {
				console.log(`Wake up after ${time}`)
				this.next()
			}, time)
		}
		this.tasks.push(fn)
		return this
	}

	lazyMan.prototype.next = function () {
		let task = this.tasks.shift()
		task && task()
	}
}


// 函数循环
function fun (n, o) {
	console.log(`result ${o}`)
	return {
		fun: function (m) {
			return fun(m, n)
		}
	}
}
// let a = fun(0)
// a.fun(1)
let b = fun(0).fun(1)


// 自制 apply
Function.prototype.demonApply = function (context) {
	let _t = typeof context
	let map = {
		string: String.prototype
	}

	context = map[_t] || window

	let _fn = Symbol()
	context[_fn] = this

	let argv = arguments[1]
	// let res = argv ? context[_fn](...argv) : context[_fn]()
	let res = argv ? context[_fn](...Array.from(argv)) : context[_fn]()
	delete context[_fn]
	return res
}

let cname = function () {
	console.log(this.name)
}

let person = {
	name: 'hahah'
}

// cname.demonApply(person, {length: 10})
