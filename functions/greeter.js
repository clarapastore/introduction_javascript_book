// In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js.
// Add a function to this program that solicits the user's first and last names in separate invocations
// The function should return the appropriate name as a string.
// Use the return values to greet the user with their full name. 

let rlSync = require("readline-sync");

let firstName = askUserName("What is your first name?");
let lastName = askUserName("What is your last name?");
console.log(`Hello, ${firstName} ${lastName}!`);

function askUserName (prompt) {
  return rlSync.question(String(prompt) + " ");
}


// Launchschool's solution
// Key differences are: the requirement for readline-sync is not done at the outermost scope, but only inside the function scope
// A name variable is initialized inside the function's scope to make it easier to understand what the call to rlSync.question() is returning
// The local variable is then returned, instead of the result of the rlSync expression
// The name of the function is a better one: getName makes it clear that it gets something, it's a better verb compared to ask

// One thing I think I did better: Adding the extra space on line 13 inside the body of the function makes it so that you don't have to add an extra space when passing the string as an argument to the function. This is useful since we need a space anyway, so it saves a bit of overhead when calling the function.
// Another thing I did which I'm not sure I did better is to force type coercion into a String. I did it to prevent passing another data type as an argument to the function and potentially breaking it.
// Although, now I've checked and it looks like the question method already coerces the argument passed, so coercing it with the String() method isn't useful

// function getName(prompt) {
//   let readlineSync = require('readline-sync');
//   let name = readlineSync.question(prompt);
//   return name;
// }

// let firstName = getName('What is your first name? ');
// let lastName = getName('What is your last name? ');
// console.log(`Hello, ${firstName} ${lastName}!`);


  
