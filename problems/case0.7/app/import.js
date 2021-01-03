import customNumber from 'customNumber'

function createButton () {
  const ele = document.createElement('button')
  ele.innerHTML = 'Click me.'
  ele.onclick = (e) => {
    import (/* webpackChunkName: 'iii' */ "./component/t1.js").then((t1) => {
      t1.sayName('lala.111')
    })
  }
  return ele
}

document.body.appendChild(createButton())

console.log('i am import.js.')
console.log(customNumber)
console.log(`num 1 english is ${ customNumber.convertNumberToEng(1) }`)
