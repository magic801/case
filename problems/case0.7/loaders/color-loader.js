module.exports = function (source) {
  console.log(`-- ${this.query.style} --`)
  return source + `\n@import "${this.query.style}";\n`
}
