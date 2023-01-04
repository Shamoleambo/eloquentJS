const reverseArray = array => {
  let newArray = []
  for (let i = array.length - 1; i >= 0; i--) newArray.push(array[i])
  return newArray
}

const reverseArrayInPlace = array => {
  let j = array.length - 1
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    ;[array[i], array[j]] = [array[j], array[i]]
    j--
  }
  return array
}

//Testing reverse array:
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//Testing reverse array in place:
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9]))
