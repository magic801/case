import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

export default {
  input: './main.js',
  output: {
    file: './dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    replace({
      delimiters: ['@','!'],
      values: {
        NICKNAME: 'hah'
      }
    }),
    resolve()
  ]
}