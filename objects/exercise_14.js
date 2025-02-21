/* Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks. */

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// Variables
// hello (function name is a variable) line 3
// greeting (parameters are variables) line 3
// name (parameters are variables) line 34
// xyzzy (function name is a variable) line 7
// howdy line 11
// hello line 11
// foo line 12
// xyzzy line 12

// Object property names
// a line 8
// b line 8
// c line 8
// d line 8
// 0 (index) line 8
// 1 (index) line 8
// 2 (index) line 8

// Primitive values
// " " (empty string is a primitive value) line 4
// 1 line 8
// 2 line 8
// 3 line 8
// 4 line 8
// 5 line 8
// a line 8
// b line 8
// c line 8
// d line 8
// 0 (index) line 8
// 1 (index) line 8
// 2 (index) line 8
// "Hi" line 11
// "Grace" line 11


// Objects
// hello (functions are objects) line 3
// xyzzy (functions are objects) line 7
// {a: 1, b: 2, c: [3, 4, 5], d: {}} line 8
// [3, 4, 5] line 8
// {} line 8
