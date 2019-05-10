import '../css/index.css'
import qrImage from '../img/qr-s.png'
import { sayName } from './test'

let ele = document.createElement('img')
ele.src = qrImage
setTimeout(() => {
  document.body.appendChild(ele)
}, 200)

sayName('帅哥12')
