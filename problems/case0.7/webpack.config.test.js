const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'test', 'index.js'),
  output: {
    path: path.join(__dirname, 'test', 'dist'),
    filename: 'test.js'
  }
}
