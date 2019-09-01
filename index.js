const {strict: assert} = require('assert')
const handleLines = require('./src/handleLines/handleLines')

const [,,input, output] = process.argv

assert(typeof input === 'string' && input.length > 0, new Error('input argument not provided'))
assert(typeof output === 'string' && output.length > 0, new Error('output argument not provided'))

const columns = [
  'Id',
  'PostTypeId',
  'AcceptedAnswerId',
  'OwnerUserId',
  'CreationDate',
  'Title',
  'Body',
  'Tags',
  'ParentId'
];

(async () => {
  console.log('before handleLines')
  await handleLines(columns, input, output)
  console.log('after handleLines')
})()
