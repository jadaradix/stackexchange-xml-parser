const readline = require('readline')
const fs = require('fs')

const handleLine = require('../handleLine/handleLine')

const emptyFile = (filename) => {
  return new Promise((resolve, reject) => {
    return fs.writeFile(filename, '', error => {
      error && reject(error)
      !error && resolve()
    })
  })
}

const writeColumns = (stream, iterable) => {
  const string = Array.from(iterable).join(',')
  stream.write(string + '\n')
}

const writeRow = (stream, iterable) => {
  const string = Array.from(iterable).map(s => `"${s}"`).join(',')
  stream.write(string + '\n')
}

const handleLines = async (columns, input, output) => {
  await emptyFile(output)

  return new Promise((resolve, reject) => {
    const inputStream = readline.createInterface(
      {
        input: fs.createReadStream(input)
      }
    )
    const outputStream = fs.createWriteStream(
      output,
      {
        flags: 'a' // 'a' means appending (old data will be preserved)
      }
    )
    
    let currentLineHolder = ''

    const doSomething = () => {
      const map = handleLine(columns, currentLineHolder)
      columns.forEach(column => {
        map.set(column, map.get(column) || '')
      })
      if (!hasWrittenColumns) {
        hasWrittenColumns = true
        writeColumns(outputStream, map.keys())
      }
      writeRow(outputStream, map.values())
    }

    let c = 0
    let lineNumber = 0
    let hasWrittenColumns = false
    inputStream.on('line', line => {
      if (lineNumber < 2) {
        lineNumber += 1
        return
      }
      if (lineNumber === 2) {
        currentLineHolder = line
        lineNumber += 1
        return
      }
      if (line.startsWith('  <row')) {
        doSomething()
        currentLineHolder = line
      } else {
        currentLineHolder += line
      }

      lineNumber += 1
      if (lineNumber > 10000) {
        c += 1
        console.log(c * 10000)
        lineNumber = 0
      }
    })
  
    inputStream.on('close', () => {
      doSomething()
      outputStream.end()
      return resolve()
    })
  })
}

module.exports = handleLines
