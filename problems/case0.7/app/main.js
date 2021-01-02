import '../css/index.css'

import { Button } from 'element-ui'

import t1 from './component/t1'
import { say } from './component/t2'
import { sayMName } from './component/test.ttt'
// import test from './test'

import Img from '../img/qr-s.png'


function addDiv () {
  let div = document.createElement('div')
  div.innerHTML = 'God my.'
  div.classList.add('big-pic')
  document.body.appendChild(div)
}

function addImage () {
  let img = document.createElement('img')
  img.src = Img
  document.body.appendChild(img)
}

if (window.time && window.name) {
  console.log(`${window.time}  ${window.name}`)
}


addDiv()
addImage()

console.log(Button)

t1.sayName('哈哈哈')
// const tmp = say()
t1.sayName('哈哈哈11')
sayMName()

if (module.hot) {
  module.hot.accept('./component/print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}

