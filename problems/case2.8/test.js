document.getElementById('btn').addEventListener('click', () => {
    let span = document.getElementById('testSpan1')

    let start = span.getBoundingClientRect()
    span.classList.add('o-end')
    let end = span.getBoundingClientRect()
    let invert = end.x - start.x
    span.style.transform = `translateX(${-invert}px)`
    // requestAnimationFrame(() => {
    //   span.style.transform = ''
    //   span.classList.add('o-transition')
    // })
    setTimeout(() => {
      span.style.transform = ''
      span.classList.add('o-transition')
    }, 62.5)
    span.addEventListener('transitionend', (e) => {
      console.log('end..')
    })
})
