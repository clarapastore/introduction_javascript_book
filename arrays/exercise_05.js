/* Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function. */

function findIntegers(array) {
  let integerArray = array.filter(element => Number.isInteger(element))
  return integerArray;
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
