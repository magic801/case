let path = require('path')
let base = require('./webpack.config.base.js')

let dev = Object.assign(base, {
  devtool: 'inline-source-map',

  devServer: {
  	port: 9001,
    contentBase: [ path.join(__dirname, './dist'), path.join(__dirname, './lib') ],
    open: true,
    inline: true,
    // inline: false,
    hot: true
  }
})

// dev.output.publicPath = path.join(__dirname, './dist')

module.exports = dev
