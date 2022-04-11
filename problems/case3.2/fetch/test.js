function getData() {
  let value = sessionStorage.getItem('cache')
  if (value) {
    return value
  }

  fetch('http://m.test.com/data.json').then(res => {
    console.log(res)
    return res.json()
  }).then(data => {
    console.log(data)
    sessionStorage.setItem('cache', data)
  })
}

getData()
