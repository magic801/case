module.exports = function(source) {
  console.log('rename-loader')

  const reg = new RegExp(this.query.key, 'g')
  return source.replace(reg, this.query.value)
}