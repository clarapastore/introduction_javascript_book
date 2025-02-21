// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// The following code logs [1, 4, 3] to the console.
// This is because we have initialized the variable array2 to the reference of the variable array1, so both variables point to the same address in memory where the array is stored
// On line 5, we reassign the element at index 1 of the array, but this operation doesn't assign a new array to the variable. What it does instead is mutate the array. This means that the contents of the array have been changed, but the memory location of the array stays the same.
