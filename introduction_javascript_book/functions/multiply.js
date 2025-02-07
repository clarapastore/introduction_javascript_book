// Instructions:
// Write a program that uses a multiply function to multiply two numbers and returns the result
// Ask the user to enter the two numbers, then output the numbers and result as a simple equation. 

function getNumber(prompt) {
  let rlSync = require("readline-sync");
  let number = parseFloat(rlSync.question(prompt));
  return number;
}

function multiply(a, b) {
  let result = a * b;
  return result;
}

let firstNumber = getNumber("Enter the first number: ");
let secondNumber = getNumber("Enter the second number: ");

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);

