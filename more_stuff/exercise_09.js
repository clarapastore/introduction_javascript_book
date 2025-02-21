// Earlier, we learned that JavaScript has multiple versions of the numeric value zero. In particular, it has 0 and -0. While it's mathematically nonsensical to distinguish between 0 and -0, they are distinct values in JavaScript. We won't get into why JavaScript has a 0 and -0, but it can be useful in some cases.

// There's a problem, however: JavaScript itself doesn't seem to realize that the values are distinct:

/* There are other ways to detect a -0 value. Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number. */

function isMinusZero(number) {
  return number.toLocaleString() === "-0";
}

function isMinusZeroWithoutLocale (number) {
  return (1 / number) === -Infinity;
}

console.log(isMinusZero(1)); // false
console.log(isMinusZero(-1)); // false
console.log(isMinusZero(0)); // false
console.log(isMinusZero(-0)); // true
console.log(isMinusZero(+0)); // false
console.log(isMinusZeroWithoutLocale(1)); // false
console.log(isMinusZeroWithoutLocale(-1)); // false
console.log(isMinusZeroWithoutLocale(0)); // false
console.log(isMinusZeroWithoutLocale(-0)); // true
console.log(isMinusZeroWithoutLocale(+0)); // false
