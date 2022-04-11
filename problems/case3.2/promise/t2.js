// 防抖&节流
// fun([
// () => console.log('1')
// () => sleep(),
// () => console.log('2')
// ])
 
let timer = null
// function fn() {
//   const time = 1000

//   if (timer) {
//     clearTimeout(timer)
//   }

//   timer = setTimeout(() => {
//     console.log('out.')
//   }, time)
// }

function throttle() {
  let hasOne = false

  return () => {
    if (hasOne) {
      return
    }

    hasOne = true
    setTimeout(() => {
      console.log('out.')
      hasOne = false
    }, 1000)
  }
}

const fn1 = throttle()
