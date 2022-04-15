function loadImage (url) {
  var image = new Image()
  return new Promise((resolve, reject) => {
    image.src = url

    image.onload = (res) => {
      resolve(res)
    }

    image.onerror = (err) => {
      reject(err)
    }
  })
}

const realUrl = 'https://pic.leetcode-cn.com/1627640862-HgXcTO-Frame 1444.jpg'
const fakeUrl = 'http://1.2.com/a.jpg'
loadImage(realUrl).then((res) => {
  alert(res)
}).catch(err => {
  alert(err)
})
