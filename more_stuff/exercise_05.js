// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// The function takes an argument string, and:
// Splits it into an array of strings (the split occurs at the space character)
// Reverses the index order of the array returned by the split method
// Maps over the array returned by the reverse method.
// The callback inside the map method returns the length of each string in the array
// The map method returns a new array of the length of the strings of the array returned by the reverse method
// Finally, the function returns this new array of string lengths. 
