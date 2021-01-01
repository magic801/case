module.exports = function (source) {
  console.log(`-- ${ JSON.stringify(this.query) } --`)
  return source + `\n.hahahah{};\n`
}
