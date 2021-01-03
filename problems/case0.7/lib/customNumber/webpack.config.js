const path = require('path')

module.exports = {
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'customNumber.js',
    library: "nbNumber",
    libraryTarget: "umd"
  }
}