var path = require("path")

module.exports = {
  entry: [
    './main.js'
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "build",
    filename: "bundle.js"
  }
}