let rlSync = require("readline-sync");

let age = Number(rlSync.question("How old are you? "));

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);

// Another (and probably better) way to parse the return value of the question method is to use parseInt() instead of Number().
// This is because if the user inputs a floating number instead of an integer, parseInt() will take care of turning the float into an integer. 
