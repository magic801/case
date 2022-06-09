const { node } = require("webpack")

module.exports = function({ types: t }) {
  // console.log(t)
  return {
    visitor: {
      VariableDeclaration(path) {
        // console.log(path.node)
        path.node.kind = 'var'
      },
      CallExpression(path) {
        console.log(path)
      }
    }
  }
}