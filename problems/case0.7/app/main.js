import '../css/index.css'

import { sayName } from './test'
import { Button } from 'element-ui'
import Img from '../img/qr-s.png'
import { sayMName } from './test.ttt'


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


addDiv()
addImage()

console.log(Button)

sayName('哈哈哈1')
sayMName()

