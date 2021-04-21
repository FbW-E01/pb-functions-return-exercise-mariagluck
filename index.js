// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:


function checkAge(age) {
  return age > 18;

  }
console.log(checkAge(25));
console.log(checkAge(14));
console.log(checkAge(25));

// ANSWER: it prints 
// true
// false
// true 


// Write a function min(a,b) which returns the least of two numbers a and b.
  function min(a, b) {
   return Math.min(a, b);
  }

console.log(min(5, 7));
console.log(min(1, -4));
console.log(min(75, 47));

// ANSWER: it prints
// 5
// -4
// 47

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
  function pow(x, n) {
    return Math.pow(x, n);
  }

console.log(pow(4, 10));
console.log(pow(1, 4));
console.log(pow(26,6));

// ANSWER: it prints1048576
// 1048576
// 1
// 308915776