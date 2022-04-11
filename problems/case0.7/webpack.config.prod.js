const base = require('./webpack.config.base.js')

const path = require('path')
const merge = require('webpack-merge')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(base, {
  devtool: 'source-map',

	output: {
    path: path.resolve(__dirname, "./dist"),
    chunkFilename: "[name].[chunkhash:8].js",
    filename: "[name].js"
    // publicPath: 'http://www.iqiyi.com/'
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
})
