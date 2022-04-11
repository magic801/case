// 异步转同步
// fun([
// () => console.log('1')
// () => sleep(),
// () => console.log('2')
// ])
 
function fun(list)  {
  // const max = 1
  const fns = []
  // let count = 0

  list.forEach(item => {
    fns.push(() => {
      const result = item()
      if (result instanceof Promise) {
        result.then(next)
      } else { 
        next()
      }
    })
  })

  function  next() {
    if (fns && fns.length > 0) {
      fns.shift()()
    }
  }

  next()
}

function sleep(time = 300) {
    return new Promise((resolve) => {
      console.log('sleep start.')
      setTimeout(() => {
        console.log('sleep end.')
        resolve()
      }, time)
    }) 
}

fun([
() => console.log('1'),
() => sleep(1000),
() => console.log('2'),
() => sleep(1000),
() => console.log('3')
])
