var path = require("path")
let HtmlWebpackPlugin = require('html-webpack-plugin')
let HelloWorldPlugin = require('./plugins/helloworld.js')

module.exports = {
  entry: {
    main: path.join(__dirname, './app/main.js'),
    m1: path.join(__dirname, './app/main1.js')
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
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