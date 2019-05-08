const path = require('path')

module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },

  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: file => (
        /node_modules/.test(file) &&
        !/\.vue\.js/.test(file)
      )
    }]
  }
}
