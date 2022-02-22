
console.log(process.cwd())

console.log(__dirname)

console.log(process.argv)

var module = require('./t2')

console.log(module)

process.stdin.resume()

process.stdin.on('data', (text) => {
  // process.stdout.write(text.toUpperCase())
  process.stdout.write(text)
})
