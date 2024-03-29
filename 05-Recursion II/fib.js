// fib

// Write a recursive function called fib which accepts a number and 
// returns the nth number in the Fibonacci sequence. Recall that the 
// Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
// which starts with 1 and 1, and where every number thereafter is equal 
// to the sum of the previous two numbers.

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(5));

// fib(4)          + fib(3)
// fib(3) + fib(2) + fib(2) + fib(1)
// fib(2) + fib(1) + fib(2) + fib(2) + fib(1) = 5
// which is the 5th number of the fibonacci sequence
    