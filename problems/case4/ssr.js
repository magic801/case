const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.html', 'utf-8')
})

server.get('*', (req, res) => {
  const context = {
    title: 'hah,2333'
  }
  const app = new Vue({
    template: `<div>Hello aj</div>`
  })

  renderer.renderToString(app, context).then(html => {
    res.write(html)
    res.end()
  })
  
})

server.listen(8080)
