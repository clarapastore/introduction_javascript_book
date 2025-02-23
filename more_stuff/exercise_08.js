// Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination.

// Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

function isNotANumber(value) {
  return value !== value ? true : false;
}

console.log(isNotANumber(1));
console.log(isNotANumber("hi"));
console.log(isNotANumber({}));
console.log(isNotANumber([]));
console.log(isNotANumber(NaN));
console.log(isNotANumber(undefined));
console.log(isNotANumber(null));
