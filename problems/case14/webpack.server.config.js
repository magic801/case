const base = require('./webpack.base.config.js')
const path = require('path')

const { VueSSRServerPlugin } = require('vue-ssr-webpack-plugin')

let config = Object.assign({}, base)
config.entry = path.join(__dirname, './server-entry.js')
// config.output.filename = 'server-bundle.js'
config.target = 'node'
config.output.libraryTarget = 'commonjs2'
config.plugins.push(
  new VueSSRServerPlugin()
)

module.exports = config
