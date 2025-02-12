/* Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer. */

// function evenOrOdd(num)
// if num is even (if the remainder of num divided by 2 is equal to 0), console.log('even')
// else console.log('odd')
// I'm not performing any explicit type coercion on the argument, because we're assuming that the argument is always an integer


function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("even")
  } else {
    console.log("odd");
  }
}

evenOrOdd(2); // Expected output: "even"
evenOrOdd(1); // Expected output: "odd"
evenOrOdd(21); // Expected output: "odd"
evenOrOdd(12); // Expected output: "even"
