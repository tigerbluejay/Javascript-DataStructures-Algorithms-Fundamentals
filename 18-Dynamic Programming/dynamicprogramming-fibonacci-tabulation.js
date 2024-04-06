// Tabulation
// This is the bottom up version of the same problem
// We store results in an array and loop and move forward

// Bottom up because we calculate first fib(3), fib(4), fib(5)
// and so on

function fibo(n){
    if (n <= 2) return 1;
    var fibNums = [0,1,1];
    for (var i = 3; i <=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

// bottom up doesn't run into "maximum call stack size exceeded"
// which results from unresolved recursive calls in the memoized version
// of the solution which still uses recursion.
// this is the problem of the memoized version in terms of space complexity

// time complexity is O(N), just like the memoized version.
// but space complexity is better