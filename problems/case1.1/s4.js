// 最大连续子序列
let list1 = [2,-1,4,-2,1,2,-5,3]
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

// letcode 167
// 获取2数和为target
let list2 = [1,2,3,4,5,6,7]
function getTwoPointer (list = [], target = 4) {
	let left = 0;
	let right = list.length - 1

	let result = {
		min: -1,
		max: -1
	}

	while (left < right) {
		let sum = list[left] + list[right]
		if (sum === target) {
			result.min	= left + 1
			result.max	= right + 1
			break
		} else if (sum <= target) {
			left++
		} else {
			right--
		}
	}

	return result
}

// letcode 209
// 求最短连续子数组的数组和sum >= target
let list3 = [2,3,1,2,4,3]
function getMinLXZXH (list, target = 7) {
	let left = 0
	let right = 0
	let len = 0
	let min = 1000000

	let he = list[0]

	while (left < list.length && right < list.length) {
		if (he >= target) {
			console.log(`${left} - ${right} - ${he}`)
			min = Math.min(min, right - left + 1)
			he -= list[left]
			left++
		} else {
			right++
			he += list[right]
		}
	}

	return min
}
