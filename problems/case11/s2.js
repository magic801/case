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
