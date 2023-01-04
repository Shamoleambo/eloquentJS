const range = (start, end) => {
  let array = []
  for(let i = start; i <= end; i++) array.push(i)
  return array
}

const sum = (array) => {
  let sum = 0
  for(let number of array) sum += number
  return sum
}

//Test range:
console.log(range(1,10))

//Test sum:
const arrayOfNumbers = range(1,10)
console.log(sum(arrayOfNumbers))
