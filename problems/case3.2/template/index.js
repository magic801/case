const enginer = require('./engin')

function getAst (input) {
  console.log('start')

  const tokens = enginer.tokenizer(input)
  console.log('tokens')
  console.log(tokens)

  const parsers = enginer.parser(tokens)
  console.log('parsers')
  console.log(JSON.stringify(parsers, '', ' '))
}

module.exports = {
  getAst
}
