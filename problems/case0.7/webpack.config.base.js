let path = require("path")

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HelloWorldPlugin = require('./plugins/helloworld.js')

module.exports = {
  entry: {
    // main: path.join(__dirname, './app/main.js'),
    m1: path.join(__dirname, './app/main1.js')
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash:4].js"
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: path.join(__dirname, './loaders/color-loader'),
        options: {
          style: path.join(__dirname, './special/cop-a.css')
        }
      }]
    }, {
      test: /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    }, {
      test: /\.js$/,
      use: ['babel-loader']
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