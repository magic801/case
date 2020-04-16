let url = 'http://pub.m.iqiyi.com/h5/act/resources/29312003812/?key=jzhb&src=usergrowth'
// let url = 'http://m.iqiyipic.com/common/lego/20200414/b790170d1c87493ab2422f5f90217155.jpg'
// let url = 'http://activity.m.iqiyi.com/web/crewGift.html'

let xhr = new XMLHttpRequest()
xhr.timeout = 1000
// xhr.responseType = 'blob'
xhr.responseType = 'json'

xhr.onload = e => {
  console.log('success.')
}
xhr.ontimeout = e => {
  console.log('ontimeout.')
}

xhr.open('GET', url, true)
xhr.send()
