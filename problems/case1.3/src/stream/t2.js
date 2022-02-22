let fs = require('fs')

const file = fs.createWriteStream('./bigFile.txt')

for (let i=0; i<1e5; i++) {
  file.write('i am the king \n')
}

file.end()
