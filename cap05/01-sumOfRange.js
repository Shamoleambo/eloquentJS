const range = (start, end, step = 1) => {
  let array = []
  if(start <= end) for (let i = start; i <= end; i += step) array.push(i)
  else for (let i = start; i >= end; i += step) array.push(i)
  return array
}

const sum = array => {
  let sum = 0
  for (let number of array) sum += number
  return sum
}

//Test range:
console.log(range(1, 10))
console.log(range(1, 10, 2))
console.log(range(5, 2, -1))

//Test sum:
console.log('\n\nrange(1, 10) ',sum(range(1, 10)))
console.log('\n\nrange(1, 10, 2) ',sum(range(1, 10, 2)))
console.log('\n\nrange(5, 2, -1) ',sum(range(5, 2, -1)))
console.log('\n\nrange(5, 2, -2) ',sum(range(5, 2, -2)))
