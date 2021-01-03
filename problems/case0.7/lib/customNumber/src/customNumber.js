const list = [{
  key: 1,
  value: 'one'
}, {
  key: 2,
  value: 'two'
}, {
  key: 3,
  value: 'three'
}, {
  key: 4,
  value: 'four'
}]

function convertNumberToEng (num) {
  const tmp = list.filter(t => t.key === num)
  if (tmp && tmp.length > 0) {
    return tmp[0].value
  } else {
    return 'error.'
  }
}

function convertEngToNumber (word) {
  const tmp = list.filter(t => t.value === word)
  if (tmp && tmp.length > 0) {
    return tmp[0].key
  } else {
    return '-1'
  }
}

export default {
  convertEngToNumber,
  convertNumberToEng
}
