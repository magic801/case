const program = require('commander')

program
  .option('-a, --all', 'description..', 'all')
  .option('-t, --test', 'description..', 'test')
  .parse(process.argv)

program.on('all', () => {
  console.log('alll....')
})

// console.log(process.argv)
// console.log(program.opts())

console.log(program.all)
