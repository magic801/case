const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')
const path = require('path')

// module.exports = merge(base, {
// 	entry: {
// 		client: path.join(__dirname, '../client-entry.js')
// 	}
// })


const { VueSSRClientPlugin } = require('vue-ssr-webpack-plugin')

module.exports = merge(base, {
  entry: {
    client: path.join(__dirname, '../client-entry.js')
  },

  plugins: [
    new VueSSRClientPlugin()
  ]
})
