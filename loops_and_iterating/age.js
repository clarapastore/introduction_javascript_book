// Modify the age.js program you wrote in the exercises for the Input/Output chapter.
// The updated code should use a for loop to display the future ages. 

let rlSync = require("readline-sync");

let age = Number(rlSync.question("How old are you? "));

console.log(`You are ${age} years old.`);

for (let years = 10; years <= 40; years += 10) {
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}

// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);

