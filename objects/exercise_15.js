/* Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one. */

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

// Variables
// bar
// arg1
// arg2
// foo
// qux
// result

// Object property names:
// abc
// def
// ghi
// jkl
// mno
// pqr
// 0 (index) of abc array
// 1 (index) of abc array
// 2 (index) of abc array
// 3 (index) of abc array
// 0 (index) of inner abc array
// 1 (index) of inner abc array
// 2 (index) of inner abc array

// Primitive values
// "hello"
// abc
// def
// ghi
// jkl
// mno
// pqr
// "0" (index) of abc array
// "1" (index) of abc array
// "2" (index) of abc array
// "3" (index) of abc array
// "0" (index) of inner abc array
// "1" (index) of inner abc array
// "2" (index) of inner abc array
// 1
// 2
// 3
// 4
// 5
// 6
// null
// NaN
// "Victor"
// "Antonina"

// Objects
// bar
// qux
// [1, 2, 3, [4, 5, 6]]
// [4, 5, 6]
