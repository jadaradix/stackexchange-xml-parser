const {strict: assert} = require('assert')
const handleLines = require('./src/handleLines/handleLines')

let [,,input, output, columns] = process.argv

assert(typeof input === 'string' && input.length > 0, new Error('input argument not provided'))
assert(typeof output === 'string' && output.length > 0, new Error('output argument not provided'))
assert(typeof columns === 'string' && columns.length > 0, new Error('columns argument not provided'));

(async () => {
  console.log('before handleLines')
  await handleLines(columns.split(','), input, output)
  console.log('after handleLines')
})()
