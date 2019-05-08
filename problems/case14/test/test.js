const Vue = require('vue')
const fs = require('fs')
const path = require('path')
const server = require('express')()

const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync(path.join(__dirname, './index.template.html'), 'utf-8')
})

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  const context = {
    title: req.url,
    meta: `
      <meta charset="UTF-8">
      <meta name="descript" content="基于webpack的SSR">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    `
  }

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      console.log(err)
    } else {
      res.write(html)
    }
    res.end()
  })
})

server.listen(8050, () => {
  console.log('listen://  8050')
})
