function sum () {
	let result = 0
	if (arguments.length > 1 ) {
		for (let i=0, len=arguments.length; i<len; i++) {
			result += arguments[i]
		}
		return result
	} else {
		result += arguments[0]
		let tmp = function () {
			result += arguments[0]
			return tmp
		}
		tmp.toString = () => {
			return result
		}
		tmp.valueOf = () => {
			return result
		}

		return tmp
	}
}

function add(x) {
	var sum = x
	var tmp = function (y) {
		sum = sum + y
		return tmp
	}
	tmp.toString = function () {
		return sum
	}
	return tmp
}


let count = 0
let limit = 2
let cacheList = []

function schedule (fn) {
	new Promise((resolve, reject) => {
		let task = ctask(fn, resolve, reject)
		if (count >= limit) {
			cacheList.push(task)
			console.log(`push cacheList.`)
		} else {
			count++
			task()
		}
	})
}

function ctask (fn, resolve, reject) {
	return function () {
		console.log('excute task.')
		fn.call(this).then((data) => {
			console.log(`done ${data}`)
		}, (er) => {
			console.log(`error ${er}`)
		}).then(() => {
			console.log(`finally ${count}`)
			count--
			let task = cacheList.shift()
			if (task) {
				task()
				count++
			}
		})
	}
}

function testSchedule () {
	let t1 = () => {
		return deferDo(1000).then(() => {
			return 't1 done'
		})
	}

	let t2 = () => {
		return deferDo(500).then(() => {
			return 't2 done'
		})
	}

	let t3 = () => {
		return deferDo(400).then(() => {
			return 't3 done'
		})
	}

	schedule(t1)
	schedule(t2)
	schedule(t3)
}

function deferDo (time = 200) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, time)
	})
}
