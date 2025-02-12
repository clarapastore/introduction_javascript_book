// What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// The following code is an example of fall through inside a switch statement.
// A fall through occurs when there is no break statement added after the clause that is executed in a case. When there is no break statement, the execution of the following case clauses will take place. 
// Since the argument passed is '113', the code will log the following to the console:
// Product2
// Product3
// Product not found!
