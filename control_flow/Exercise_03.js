/* Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return. */
// If num % 2 === 0, the number is an even integer
// If num % 2 === 1, the number is an odd integer
// Otherwise, the number is not an integer


function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("even")
  } else if (num % 2 === 1) {
    console.log("odd");
  } else {
    console.log("Argument is not an integer");
    return;
  }
}

evenOrOdd(2) // Expected output: "even"
evenOrOdd(1) // Expected output: "odd"
evenOrOdd(21) // Expected output: "odd"
evenOrOdd(120) // Expected output: "even"
evenOrOdd(1.2345) // Expected output: "Argument is not an integer"
evenOrOdd(2.123) // Expected output: "Argument is not an integer"


// Launchschool's solution
/* use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise. */

// function evenOrOdd(number) {
//   if (!Number.isInteger(number)) {
//     console.log('Sorry, the value you passed is not an integer');
//     return;
//   }

//   if (number % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// }
