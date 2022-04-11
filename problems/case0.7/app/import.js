import customNumber from 'customNumber'

function createButton () {
  const ele = document.createElement('button')
  ele.innerHTML = 'Click me.'
  ele.onclick = (e) => {
    import (/* webpackChunkName: 'iii' */ "./component/t1.js").then((t1) => {
      t1.sayName('lala.1111')
    })
    import('./component/t2.js').then(t2 => {
      t2.say('啥玩楞')
    })
  }
  return ele
}

document.body.appendChild(createButton())

console.log('i a1m import.js.')
console.log(customNumber)
console.log(`num 1 english is ${ customNumber.convertNumberToEng(1) }`)
