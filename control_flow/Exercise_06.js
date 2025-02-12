/* What does this code output to the console? */
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

// The following code logs "Not Empty" to the console.
// This is because an empty array is a truthy value, and if used as a condition in an if statement, JavaScript implicitly coerces it into the boolean value true.
// Therefore, the clause console.log('Not Empty') gets executed. 
