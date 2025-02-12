/* Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'. */

function upperCaseMoreThan10(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(upperCaseMoreThan10("hello world")); // Expected output: "HELLO WORLD"
console.log(upperCaseMoreThan10("goodbye")); // Expected output "goodbye"
console.log(upperCaseMoreThan10("this is a long string")); // Expected output: "THIS IS A LONG STRING"
console.log(upperCaseMoreThan10("bla")); // Expected output: "bla"
