let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}


/* The following code causes an infinite loop (a loop that never stops iterating). Why? */

// Because the condition expression for the while loop always returns true.
// This is because the expression on line 3 is a variable reassignment expression, and not a comparison operation.
// counter = 1 binds the value 1 to the variable counter, and returns the new value, 1
// The value 1 is truthy, therefore the conditional expression (counter = 1) always returns true. This means that the code inside the loop will execute
// The code logs the value of counter (1) to the console, then assigns it to the value of counter + 1, which is 2.
// The if statement runs its body only when the value of counter is greater than 2. Since at that point the value of counter is 2, the body is ignored
// Next, the conditional expression is evaluated again. Since the expression is a variable reassignment, it's going to bind the value 1 to the counter variable and return it. Since the expression returns 1, the conditional expression evaluates to true, and the loop runs again.
// This therefore causes an infinite loop to take place. 
