// Consider the following code:

function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

/* As written, this code will raise an error on line 8. Without creating a new function or changing lines 7 or 8, update this code to work as intended. */
