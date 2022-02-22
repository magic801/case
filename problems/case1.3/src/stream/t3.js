// const fs = require('fs')

// fs.createReadStream('./bigFile.txt').pipe(fs.createWriteStream('./bigFile1.txt'))

const spawn = require('child_process').spawn
const ls = spawn('ls', ['-lh', '/usr'])

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
})

ls.on('close', (code) => {
  console.log(`exit with code ${code}`)
})
