var base = require('./webpack.config.base.js')

let dev = Object.assign(base, {
  devtool: 'source-map',

  devServer: {
    // contentBase: './public',
    open: true,
    inline: true
  }
})

dev.output.publicPath = 'dist'

module.exports = dev
