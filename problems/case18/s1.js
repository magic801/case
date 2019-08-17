document.querySelector('.box').addEventListener('touchmove', (e) => {
  console.log('box..')
  // e.preventDefault()
}, {
  passive: true
})

document.addEventListener('touchmove', (e) => {
  console.log('document..')
})