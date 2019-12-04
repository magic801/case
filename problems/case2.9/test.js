document.getElementById('btn').addEventListener('click', () => {
    anime({
      targets: 'div',
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800
    })
})
