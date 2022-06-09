const { transform } = require('@babel/core')
const fs = require('fs')

const sourceFile = './source.js'
const targetFile = './target.js'

const source = fs.readFileSync(sourceFile, 'utf-8')

const res = transform(source, {
  plugins: [require('./plugins/index')]
})

fs.existsSync(targetFile) && fs.unlinkSync(targetFile)

fs.writeFileSync(targetFile, res.code, 'utf-8')
