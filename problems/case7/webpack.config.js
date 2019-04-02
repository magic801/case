var path = require("path")

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/main.js'
  ],
  output: {
    path: path.resolve(__dirname, "./public"),
    // publicPath: "build",
    filename: "bundle.js"
  },

  devServer: {
    // contentBase: './public',
    inline: true
  }
}