const base = require('./webpack.config.base.js')

const merge = require('webpack-merge')
const	CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = merge(base, {
	output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: 'http://www.iqiyi.com/'
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
})
