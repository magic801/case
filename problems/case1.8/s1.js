document.querySelector('.box').addEventListener('touchmove', (e) => {
  console.log('box..')
  // e.preventDefault()
}, {
  passive: true
})

document.addEventListener('touchmove', (e) => {
  console.log('document..')
})

let input = document.getElementById('enter')
input.addEventListener('input', () => {
  console.log('enter..')
})

input.addEventListener('compositionstart', () => {
  console.log('compositionstart..')
})

input.addEventListener('compositionend', (e) => {
  console.log('compositionend..')
})
