let path = require('path')
let base = require('./webpack.config.base.js')

let dev = Object.assign(base, {
  devtool: 'inline-source-map',

  devServer: {
  	port: 9001,
    contentBase: path.join(__dirname, './dist'),
    open: true,
    inline: true,
    hot: true
  }
})

dev.output.publicPath = '/'

module.exports = dev
