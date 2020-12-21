let url = 'http://pub.m.iqiyi.com/h5/act/resources/29312003812/?key=jzhb&src=usergrowth'
// let url = 'http://m.iqiyipic.com/common/lego/20200414/b790170d1c87493ab2422f5f90217155.jpg'
// let url = 'http://activity.m.iqiyi.com/web/crewGift.html'


function ajaxEventTrigger(event) {
  const ajaxEvent = new CustomEvent(event, {detail: this})
  window.dispatchEvent(ajaxEvent)
}

const oldXHR = window.XMLHttpRequest
function delegateXHR() {
  const xhr = new oldXHR()

  xhr.addEventListener('loadstart', function() {
    ajaxEventTrigger.call(this, 'ajaxStart')
  }, false)

  return xhr
}

window.XMLHttpRequest = delegateXHR

function bindEvent() {
  window.addEventListener('ajaxStart', (e) => {
    console.log(e.detail)
  })
}

delegateXHR()
bindEvent()

let xhr = new XMLHttpRequest()
xhr.timeout = 1000
// xhr.responseType = 'blob'
xhr.responseType = 'json'

xhr.open('GET', url, true)
xhr.send()
