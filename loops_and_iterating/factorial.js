/* Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive: */

// First I'm going to write this using recursion because it's easier to wrap my head around the logic

// function factorial(number) {
//   if (number === 1) {
//     return 1;
//   }
//   return number * factorial(number - 1);
// }

// Now, I'm going to refactor this recursive function using a for loop instead

function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result;
}

console.log(factorial(1)); // Expected output: 1
console.log(factorial(2)); // Expected output: 2
console.log(factorial(3)); // Expected output: 6
console.log(factorial(4)); // Expected output: 24
console.log(factorial(5)); // Expected output: 120
console.log(factorial(6)); // Expected output: 720
console.log(factorial(7)); // Expected output: 5040
console.log(factorial(8)); // Expected output: 40320

