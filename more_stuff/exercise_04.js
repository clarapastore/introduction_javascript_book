// Given a list of numbers, write some code to find and display the largest numeric value in the list. 

console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));

// Since Math.max takes a list of values, and not an array, I want to test if I can use the spread operator to it. In this way, I can have my numbers stored in an array and then pass the elements as single arguments to the Math.max method
let numbersList = [1, 3, 5, 68];
console.log(Math.max(...numbersList));
