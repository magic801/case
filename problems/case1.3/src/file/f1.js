const fs = require('fs')

fs.watch('./test/t1.js', (() => {
  let count = 0
  return () => {
    count++
    console.log(`file change ${count}`)
  }
})())

console.log('watching file')
