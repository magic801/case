let path = require('path')
const base = require('./webpack.config.base.js')

module.exports = Object.assign(base, {
	output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: 'http://www.iqiyi.com/'
  },
})
