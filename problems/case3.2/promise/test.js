let p1 = new Promise((resovle, reject) => {
  setTimeout(() => {
    console.log('p1')
    resovle(1)  
  }, 600)
})

let p2 = new Promise((resovle, reject) => {
  setTimeout(() => {
    console.log('p2')
    resovle(2)  
  }, 1200)
})

// Promise.all([p1, p2]).then((res) => {
//   console.log(res)
// })

let myPromiseall = (list) => {
  let count = list.length
  let actionList = []
  let resList = []

  return new Promise((resovle, reject) => {
    function next(res, index) {
      count--
      resList[index] = res
      if (count <= 0) {
        resovle(resList)
      }
    }

    list.forEach((item, index) => {
      actionList.push(() => {
        item.then((res) => {
          next(res, index)
        })
      })
    })

    actionList.forEach(action => {
      action()
    })
  })
}

myPromiseall([p1, p2]).then((res) => {
  console.log(res)
})
