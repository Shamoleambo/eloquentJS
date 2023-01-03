const isEven = number => {
  if (number === 0) return true
  else if (number === 1 || number === -1) return false
  else return number < 0 ? isEven(number * -1 - 2) : isEven(number - 2)
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
console.log(isEven(0))
console.log(isEven(-50))
console.log(isEven(-75))
