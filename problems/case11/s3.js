function lm (name) {
	return new lazyMan(name)
}

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