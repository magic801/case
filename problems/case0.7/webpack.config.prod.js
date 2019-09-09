const base = require('./webpack.config.base.js')

const path = require('path')
const merge = require('webpack-merge')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(base, {
	output: {
    path: path.resolve(__dirname, "./dist"),
    // publicPath: 'http://www.iqiyi.com/'
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
})
