/* Dynamic Programming problems apply to problems that exhibit
1. Overlapping subproblems
2. Optimal Substructures
*/

// for example fibonacci
// we can calculate it recursively (not using dynamic programming)

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

var output = fib(5);

// this solution's time complexity is very non performant
// O(2^N)
// exponential time complexity
// so fib(large number) takes a lot to compute

// the problem is that we are repeating things
// for example in fib(5) we calculate twice fib(3)
// for example in fib(6) we calculate twice fib(4) three times fib(3)

// these fib(3) are overlapping subproblems that are calculated
// multiple times

// fib(3) is also an optimal substructure because we NEED it
// to reach fib(5)

///////////////////////////////////////////////////////////////////

// DYNAMIC PROGRAMMING
// what if we could store the answers to the repeated subproblems
// fib(3) when calculating fib(5) for example. So we don't have to
// recalculate it multiple times. This is called Memoization.
// we store the answers of the subproblems in the array
function fibo(n, memo=[]){
    // this line short circuits the repetitive calculation
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    var res = fibo(n-1, memo) + fibo(n-2, memo);
    // we store in memo once we have res
    memo[n] = res;
    return res;
}

// this solution's time complexity is 
// Constant time O(N), it grows linearly

