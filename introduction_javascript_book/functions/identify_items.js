function multiplyNumbers(num1, num2, num3) { // function declaration from line 1 to 4. multiplyNumbers is the fn name, num1, num2, num3 are the parameters
  let result = num1 * num2 * num3;           // function body from line 2 to line 3, num1, num2, num3 in the body are arguments
  return result;                             // result is the fn's return value
}

let product = multiplyNumbers(2, 3, 4);      // multiplyNumbers() function invocation. 2, 3, 4 are the arguments passed to it.


// Names of variables in the program:
// multiplyNumbers is a function name variable (global)
// num1, num2, num3 are function parameter variables (local)
// result is a let variable (local)
// product is a let variable (global)
