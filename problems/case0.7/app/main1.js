import '../css/index.css'
// import qrImage from '../img/qr-s.png'
import { sayName } from './test'

let ele = document.createElement('img')
ele.classList.add('big-pic')
// ele.src = qrImage
ele.src = 'http://m.iqiyipic.com/c.jpg'

function sleep(time = 200) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}

async function test() {
  await sleep(500)
  console.log('haha')
  document.body.appendChild(ele)
}

test()
sayName('帅哥12')
