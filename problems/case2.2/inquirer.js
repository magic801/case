let inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'list',
    name: 'test',
    message: 'Are you hs..',
    choices: ['a', 'b'],
    default: true
  }
]).then((ans) => {
  console.log(`result: ${JSON.stringify(ans)}`)
})
