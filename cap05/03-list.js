const arrayToList = array => {
  if (array.length === 1) return { value: array[0], rest: null }
  else return { value: array[0], rest: arrayToList(array.slice(1)) }
}

const listToArray = list => {
  if (!list.rest) return [list.value]
  else return [list.value, ...listToArray(list.rest)]
}

const prepend = (element, list) => {
  return {value: element, rest: list}
}

//{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 3
/* 
  false; false; counter = counter + 1 + 2
    false; false; counter = 0 + 1 + 1
      true; true; 1
*/

const nth = (list, number) => {
  let counter = 0
  if(!list.rest) {
    if(list.value === number) return 0
    else return 'teste'
  } else{
    if(list.value === number) return counter
    counter += nth(list.rest, number) + 1
  }
  console.log(`\n ${list.value}`, counter)
  return (typeof counter === 'string') ? undefined : counter
}
/* 

//Testing arrayToList:
console.log(arrayToList([1, 2, 3]))
const arrayToListResult = arrayToList([1, 2, 3, 4, 5])
console.log(JSON.stringify(arrayToListResult))
console.log('\n')

//Testing listToArray:
console.log(
  listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } })
)
console.log(listToArray(arrayToListResult))
console.log('\n')

//Testing prepend:
const prependResult = prepend(78, arrayToListResult)
console.log(JSON.stringify(prependResult))
console.log('\n')
 */

//Testing nth:
console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 1))
console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 2))
console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 3))
console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 4))
