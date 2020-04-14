let btn = document.getElementById('btn')
let layer = document.getElementById('layer')
let link = document.getElementById('link')

// btn.addEventListener('click', (e) => {
//   console.log('btnclick1')
//   // e.stopPropagation()
//   // e.stopImmediatePropagation()
//   return false
// })

// btn.addEventListener('click', (e) => {
//   setTimeout(() => {
//     console.log('btn click2')
//   }, 500)
// })

layer.addEventListener('click', (e) => {
  console.log('layer click1')
})

layer.addEventListener('click', (e) => {
  setTimeout(() => {
    console.log('layer click2')
  }, 500)
})

link.addEventListener('click', (e) => {
  console.log('link click1')
  // e.preventDefault()
  e.stopPropagation()
  // return false
})

link.addEventListener('click', (e) => {
  setTimeout(() => {
    console.log('link click2')
  }, 500)
})
