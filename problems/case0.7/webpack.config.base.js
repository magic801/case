let path = require("path")

const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HelloWorldPlugin = require('./plugins/helloworld.js')

module.exports = {
  entry: {
    import: path.join(__dirname, './app/import.js')
    // main: path.join(__dirname, './app/main.js'),
    // m1: path.join(__dirname, './app/main1.js')
  },
  // entry: path.join(__dirname, './app/main.js'),

  output: {
    path: path.resolve(__dirname, "./dist"),
    chunkFilename: "[name].[contenthash].js",
    filename: "[name].[contenthash].js"
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
      use: ['babel-loader'],
      // sideEffects: false
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
        // common: {
        //   name: 'common',
        //   chunks: 'all',
        //   minSize: 1,
        //   priority: 0
        // },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          enforce: true,
          priority: 10
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    }),
    new HelloWorldPlugin({}),
    new Webpack.DefinePlugin({
      'window.time': JSON.stringify(+new Date()),
      'window.name': JSON.stringify('猛哥最帅.')
    })
  ]
}