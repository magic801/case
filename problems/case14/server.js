const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()
server.use(express.static('dist'));

const bundle = fs.readFileSync(path.join(__dirname, './dist/server.js'), 'utf-8')
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
  template: fs.readFileSync(path.join(__dirname, './dist/index.ssr.html'), 'utf-8')
})

// let template = fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8')
// let bundle = fs.readFileSync(path.join(__dirname, './dist/vue-ssr-bundle.json'), 'utf-8')
// let clientManifest = fs.readFileSync(path.join(__dirname, './dist/vue-ssr-client-manifest.json'), 'utf-8')

// const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
//   template
//   // clientManifest
// })

server.get('*', (req, res) => {
  renderer.renderToString((err, html) => {
    if (err) {
      console.log(err)
      res.status(500).end('服务器内部错误');
      return
    }

    res.end(html)
  })
})

let port = 8080
server.listen(port, () => {
  console.log(`listen ${port}`)
})
