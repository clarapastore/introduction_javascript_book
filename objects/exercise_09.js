// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // Output: "hi"
console.log(qux); // Output: "hello"

// Line 11 reassigns an object property, which mutates the object
// Line 12 reassigns a variable, which replaces the value assigned to the local argument2 variable. This line doesn't affect any variables outside of the bar function



