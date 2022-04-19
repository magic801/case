const TOKEN_TYPE_ENUM = {
  parenStart: 'paren',
  parenEnd: 'paren',
  name: 'name',
  number: 'number'
}

const AST_TYPE_ENUM = {
  program: 'Program',
  callExpression: 'CallExpression',
  numberLiteral: 'NumberLiteral',
  expressionStatement: 'ExpressionStatement',
  identifier: 'Identifier'
}

const ACTION_TYPE_ENUM = {
  enter: 'enter',
  exit: 'exit'
}

function tokenizer(input) {
  const tokens = []
  const len = input.length
  let current = 0

  const charReg = /[a-zA-Z]/i
  const numReg = /\d/
  const parenStartReg = /\(/
  const parenEndReg = /\)/
  const whiteSpaceReg = /\s/

  function addToken(type, str) {
    tokens.push({
      type,
      value: str
    })
  }

  while(current < len) {
    const char = input[current]

    if (parenStartReg.test(char)) {
      addToken(TOKEN_TYPE_ENUM.parenStart, char)
      current++
      continue
    }

    if (parenEndReg.test(char)) {
      addToken(TOKEN_TYPE_ENUM.parenEnd, char)
      current++
      continue
    }

    if (charReg.test(char)) {
      let end = current + 1
      while (charReg.test(input[end])) {
        end++
      }
      addToken(TOKEN_TYPE_ENUM.name, input.slice(current, end))
      current = end
      continue
    }

    if (numReg.test(char)) {
      let end = current + 1
      while (numReg.test(input[end])) {
        end++
      }
      addToken(TOKEN_TYPE_ENUM.number, input.slice(current, end))
      current = end
      continue
    }

    if (whiteSpaceReg.test(char)) {
      current++
      continue
    }

    current++
  }

  return tokens
}

function parser(tokens) {
 let current = 0
 const len = tokens.length

 function worker(container) {
  while(current < len) {
    const item = tokens[current]

    if (item.type === TOKEN_TYPE_ENUM.number) {
      container.push({
        type: AST_TYPE_ENUM.numberLiteral,
        value: item.value
      })
      current++
      continue
    }

    if (item.type === TOKEN_TYPE_ENUM.name) {
      const tmp = {
        type: AST_TYPE_ENUM.callExpression,
        name: item.value,
        params: []
      }
      container.push(tmp)
      current++

      worker(tmp.params)
      continue
    }

    current++
  }
 }

 const ast = {
   type: 'Program',
   body: []
 }

 worker(ast.body)

 return ast
}

function traverser(ast, visitor) {
  function traverserArray(array, parent) {
    array.forEach(item => {
      traverserNode(item, parent)
    })
  }

  function traverserNode(node, parent) {
    let method = visitor[node.type]

    if (method && method[ACTION_TYPE_ENUM.enter]) {
      method[ACTION_TYPE_ENUM.enter](node, parent)
    }

    switch (node.type) {
      case AST_TYPE_ENUM.program:
        traverserArray(node.body, node)
        break

      case AST_TYPE_ENUM.callExpression:
        traverserArray(node.params, node)
        break

      case AST_TYPE_ENUM.numberLiteral:
        break
    }
  }

  traverserNode(ast, null)
}

function transformer(ast) {
  let newAst = {
    type: AST_TYPE_ENUM.program,
    body: []
  }

  ast._context = newAst.body

  traverser(ast, {
    [AST_TYPE_ENUM.callExpression]: {
      [ACTION_TYPE_ENUM.enter](node, parent) {
        let expression = {
          type: AST_TYPE_ENUM.callExpression,
          callee: {
            type: AST_TYPE_ENUM.identifier,
            name: node.name
          },
          arguments: []
        }

        node._context = expression.arguments

        if (parent.type !== AST_TYPE_ENUM.callExpression) {
          expression = {
            type: AST_TYPE_ENUM.expressionStatement,
            expression: expression
          }
        }

        parent._context.push(expression)
      }
    },

    [AST_TYPE_ENUM.numberLiteral]: {
      [ACTION_TYPE_ENUM.enter](node, parent) {
        let expression = {
          type: node.type,
          value: node.value
        }

        parent._context.push(expression)
      }
    }
  })

  return newAst
}

function codeGenerator(node) {
  switch(node.type) {
    case AST_TYPE_ENUM.program:
      return node.body.map(item => codeGenerator(item)).join('\n')

    case AST_TYPE_ENUM.expressionStatement:
      return codeGenerator(node.expression)

    case AST_TYPE_ENUM.callExpression:
      return codeGenerator(node.callee) + '(' + node.arguments.map(item => codeGenerator(item)).join(',') + ')'

    case AST_TYPE_ENUM.identifier:
      return node.name

    case AST_TYPE_ENUM.numberLiteral:
      return node.value
  }
}

module.exports = {
  tokenizer,
  parser,
  transformer,
  codeGenerator
}


