let blob = new Blob(['我是帅哥。aaaa'], {
  type: 'text/plain'
})

let reader = new FileReader()
reader.readAsText(blob, 'utf-8')
reader.onload = e => {
  console.log(reader.result)
}
