// In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(numbersArr => {
  for (i = 0; i < numbersArr.length; i += 1) {
    if (numbersArr[i] % 2 === 0) {
      console.log(numbersArr[i]);
    }
  }
});
