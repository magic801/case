// 最大连续子序列
let list = [2,-1,4,-2,1,2,-5,3]
function maxZXLX(list) {
	let cache = []
	let sum = 0
	let maxSum = 0
	for (let i=0,len=list.length; i<len; i++) {
		let tmp = list[i]
		cache.push(tmp)
		sum += tmp
		if (sum > maxSum) {
			maxSum = sum
		} else if (sum < 0) {
			sum = 0
			cache = []
		}
	}

	return cache
}