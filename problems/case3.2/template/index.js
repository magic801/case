const enginer = require('./engin')

function getAst (input) {
  console.log('start')

  const tokens = enginer.tokenizer(input)
  console.log('tokens')
  // console.log(tokens)

  const parsers = enginer.parser(tokens)
  console.log('parsers')
  // console.log(JSON.stringify(parsers, '', ' '))

  const traversers = enginer.transformer(parsers)
  console.log('traversers')
  // console.log(JSON.stringify(traversers, '', ' '))

  const code = enginer.codeGenerator(traversers)
  console.log('codeGenerator')
  console.log(code)
}

module.exports = {
  getAst
}
