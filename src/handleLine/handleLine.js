const START = '  <row '
const START_LENGTH = START.length

const handleLine = (columns, line) => {
  const map = new Map()

  let currentKey = ''
  let currentValue = ''

  line = line.substring(START_LENGTH)

  let i = 0
  while (i < line.length - 1) {
    const c = line[i]
    if (c === '"') {
      const positionOfClosingQuote = line.substring(i + 1).indexOf('"') + i + 1
      currentValue = line.substring(i + 1, positionOfClosingQuote)
      i += currentValue.length + 3
      const keyToWrite = currentKey.substring(0, currentKey.length - 1)
      if (columns.includes(keyToWrite)) {
        map.set(keyToWrite, currentValue)
      }
      currentKey = ''
      currentValue = ''
      continue
    } else {
      currentKey += c
      i += 1
    }
  }

  return map
}

module.exports = handleLine
