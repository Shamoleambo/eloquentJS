const countBs = string => {
  let numberOfBs = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'B') numberOfBs++
  }

  return numberOfBs
}

console.log(countBs('Bianca'))
console.log(countBs('bebê'))
console.log(countBs('BaBuino'))
