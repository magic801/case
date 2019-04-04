var path = require("path")

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
  }
}