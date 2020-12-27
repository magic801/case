let sendRequest = (url) => {
  let xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.send()
}

let sendBeacon = (url) => {
  navigator.sendBeacon(url)
}

let getTime = () => {
  return +new Date()
}

window.addEventListener('beforeunload', () => {
  let start = getTime()
  sendRequest('http://localhost:7777/beforeunload')

  localStorage.setItem('beforeunload', getTime() - start)
})

window.addEventListener('unload', () => {
  let start = getTime()
  sendRequest('http://localhost:7777/sendRequest')
  
  for (let i = 1; i < 500; i++) {
    for (let m = 1; m < 500; m++) { continue; }
  }

  localStorage.setItem('unload_sendRequest', getTime() - start)
})

window.addEventListener('unload', () => {
  let start = getTime()
  sendBeacon('http://localhost:7777/sendBeacon')

  localStorage.setItem('unload_sendBeacon', getTime() - start)
})
