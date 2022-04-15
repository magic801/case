const TOKEN_TYPE_ENUM = {
  parenStart: 'paren',
  parenEnd: 'paren',
  name: 'name',
  number: 'number'
}

const AST_TYPE_ENUM = {
  program: 'Program',
  callExpression: 'CallExpression',
  numberLiteral: 'NumberLiteral'
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
        value: item.value,
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

module.exports = {
  tokenizer,
  parser
}


