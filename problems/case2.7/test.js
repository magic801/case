let canvas = document.getElementById('mycan')
let ctx = canvas.getContext('2d')

ctx.save()
for (let i=0; i<4; i++) {
  ctx.fillStyle = `#${2*i}8${i}2ee`;
  ctx.fillRect(0, 0, 200, 30)
  ctx.rotate(15 * Math.PI / 180)
}
ctx.restore()

ctx.clearRect(0, 0, 30, 30)

// let imaged = ctx.getImageData(0, 0, 50, 50)

// for (let i=0, len=imaged.data.length; i<len; i+=4) {
//   let r = imaged.data[i]
//   let g = imaged.data[i+1]
//   let b = imaged.data[i+2]
//   imaged.data[i+3] = (r+g+b) / 3
// }

// ctx.putImageData(imaged, 0, 100)