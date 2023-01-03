const countBs = string => countChar(string, 'B')

const countChar = (string, char) => {
  let charOccurences = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) charOccurences++
  }

  return charOccurences
}

console.log(countBs('Bianca'))
console.log(countBs('bebê'))
console.log(countBs('BaBuino'))
