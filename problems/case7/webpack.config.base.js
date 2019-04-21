var path = require("path")
let HtmlWebpackPlugin = require('html-webpack-plugin')
let HelloWorldPlugin = require('./plugins/helloworld.js')

module.exports = {
  entry: [
    './app/main.js'
  ],

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg)$/,
      use: ['url-loader']
    }]
  },

  optimization: {
    // minimize: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    }),
    new HelloWorldPlugin({})
  ]
}