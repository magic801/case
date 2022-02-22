var api = {
  letConst: { passes: "'use strict'; let a; const b=4" }
}

function runTest(key) {
  if (api[key].passes) {
    return tryPassFail(api[key].passes)
  }
}

function tryPassFail(code) {
  try {
    runIt(code)
    return true
  } catch (er) {
    console.log(er)
    return false
  }
}

function runIt(code) {
  return (new Function(code))()
}

console.log('letConst')
console.log(runTest('letConst'))
