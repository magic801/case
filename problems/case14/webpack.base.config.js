const webpack = require('webpack')
const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '.'
  },

  module: {
    rules: [{
      test: /.vue$/,
      use: {
        loader: 'vue-loader'
      },
      exclude: /node_modules/
    }]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
}
