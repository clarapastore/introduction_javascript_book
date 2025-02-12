/* Write a function that logs whether an integer is between 0 and 50 (inclusive) between 51 and 100 (inclusive), greater than 100, or less than 0 */


function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number >= 0 && number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number > 50 && number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

numberRange(-12); // Expected output: "-12 is less than 0"
numberRange(0); // Expected output: "0 is between 0 and 50"
numberRange(23); // Expected output: "23 is between 0 and 50"
numberRange(50); // Expected output: "50 is between 0 and 50"
numberRange(51); // Expected output: "51 is between 51 and 100"
numberRange(74); // Expected output: "74 is between 51 and 100"
numberRange(100); // Expected output: "100 is between 51 and 100"
numberRange(101); // Expected output: "101 is greater than 100"
numberRange(1002); // Expected output: "1002 is greater than 100"




// Launch school's solution
// function numberRange(number) {
//   if (number < 0) {
//     console.log(`${number} is less than 0`);
//   } else if (number <= 50) {
//     console.log(`${number} is between 0 and 50`);
//   } else if (number <= 100) {
//     console.log(`${number} is between 51 and 100`);
//   } else {
//     console.log(`${number} is greater than 100`);
//   }
// }

