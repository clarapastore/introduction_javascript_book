/* Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer. */

function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(1)); // Expected output: 1
console.log(factorial(2)); // Expected output: 2
console.log(factorial(3)); // Expected output: 6
console.log(factorial(4)); // Expected output: 24
console.log(factorial(5)); // Expected output: 120
console.log(factorial(6)); // Expected output: 720
console.log(factorial(7)); // Expected output: 5040
console.log(factorial(8)); // Expected output: 40320

