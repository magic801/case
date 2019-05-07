const base = require('./webpack.base.config.js')
const path = require('path')

const { VueSSRClientPlugin } = require('vue-ssr-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = Object.assign({}, base)

config.entry = path.join(__dirname, './client-entry.js')
config.output.filename = 'client-bundle.js'
config.plugins.push(
  new HtmlWebpackPlugin({
    template: path.join(__dirname, './index.html')
  }),
  new VueSSRClientPlugin()
)

module.exports = config
