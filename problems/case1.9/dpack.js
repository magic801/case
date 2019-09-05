const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

let stepOne = (entry) => {
  const content = fs.readFileSync(entry, 'utf-8')
  const ast = parser.parse(content, {
    sourceType: 'module'
  })

  const dependencies = {}
  traverse(ast, {
    ImportDeclaration({ node }) {
      console.log(node)
      const dirname = path.dirname(entry)
      const newFile = './' + path.join(dirname, node.source.value)
      dependencies[node.source.value] = newFile
    }
  })

  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })

  console.log(code)
}

stepOne('./index.js')