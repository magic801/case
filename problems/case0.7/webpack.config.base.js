let path = require("path")

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HelloWorldPlugin = require('./plugins/helloworld.js')

module.exports = {
  entry: {
    main: path.join(__dirname, './app/main.js'),
    // m1: path.join(__dirname, './app/main1.js')
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js"
  },

  resolveLoader: {
    modules: ['./node_modules', './loaders']
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
      test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
      loader: 'url-loader',
      options: {
        outputPath: 'images/',
        esModule: false,
        limit: 8000
      }
    }, {
      test: /\.js$/,
      use: ['babel-loader']
    }, {
      test: /\.ttt$/,
      loader: 'rename-loader',
      options: {
        key: '@@',
        value: 'love'
      }
    }]
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    }),
    new HelloWorldPlugin({})
  ]
}