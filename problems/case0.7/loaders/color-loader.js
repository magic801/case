module.exports = function (source) {
  console.log(source)
  return (source + `\n.hahahah{};\n`).replace(/\/\*(.*)\*\//g, '$1')
}
