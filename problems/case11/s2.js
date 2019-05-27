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

// 异步调度
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


// 一个数组，只有1个数为一个，其余都是2个
function searchOnly (list = []) {
	for (let i=1,len=list.length; i<len; i++) {
		list[0] ^= list[i]
	}
	return list[0]
}


// 找最大子序列
function searchMaxZXL (str) {
	if (str.length <= 1) {
		return str
	}

	let rightMaxStr = ''
	for (let i=str.length-1; i>=0; i--) {
		if (rightMaxStr[0] > str[i]) {
			rightMaxStr = rightMaxStr[0] + rightMaxStr
		} else {
			rightMaxStr = str[i] + rightMaxStr
		}
	}

	let result = ''
	for (let i=0; i<str.length; i++) {
		if (str[i] === rightMaxStr[i]) {
			result += str[i]
		}
	}

	return result
}