// 自制JSON.strinify
function demonStrinify (o) {
  let str = ''
  if (typeof o === 'object') {
    str += '{'
    for (let k in o) {
      str += `"${k}":${getValue(o[k])}`
    }
    str += '}'
  }

  function getValue (val) {
    switch (typeof val) {
      case 'number':
        return val
      case 'string':
        return `"${val}"`
      case 'object':
        return demonStrinify(val)
      default:
        return val
    }
  }

  return str
}