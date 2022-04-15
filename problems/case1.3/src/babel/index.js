const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require("@babel/generator").default

const ast = parser.parse('a+b')

console.log(ast.program.body[0].expression.left)

const out = generate(ast)

console.log(out)
