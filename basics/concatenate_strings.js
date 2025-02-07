/* Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe' */

// Initialize my values of name and surname
let firstName = "Clara";
let lastName = "Pastore";

// Method one: use the + operator to concatenate my first name with a space and my surname
firstName + " " + lastName;

// Method two: use the String.prototype.concat() method on my first name, and pass two strings as arguments: one with a space, and the other one with my last name
firstName.concat(" ", lastName);

// Method three: use template literals to evaluate the variables firstName and lastName along with a space
`${firstName} ${lastName}`;

// Launchschool solution (written)
// Is the same as my first solution, but without declaring and setting the variables first.

// Launchschool solution (video)
// Also uses firstName and lastName variables like I have
// Solution is the same as my first solution
