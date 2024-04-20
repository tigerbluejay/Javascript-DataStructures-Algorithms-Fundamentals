/* Given an unsorted array and a number n, find if there exists a pair of elements 
in the array whose difference is n. This function should return true if the pair 
exists or false if it does not. */

function findPair(arr, n) {
    if (arr.length < 2) {
        return false;
    }
    
    const numSet = new Set();

    for (let num of arr) {
        const complement1 = num - n;
        const complement2 = num + n;

        if (numSet.has(complement1) || numSet.has(complement2)) {
            return true;
        }

        numSet.add(num);
    }

    return false;
}

// Test cases
console.log(findPair([6, 1, 4, 10, 2, 4], 2));          // Output: true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // Output: true
console.log(findPair([4, -2, 3, 10], -6));             // Output: true
console.log(findPair([6, 1, 4, 10, 2, 4], 22));         // Output: false
console.log(findPair([], 0));                          // Output: false
console.log(findPair([5, 5], 0));                       // Output: true
console.log(findPair([-4, 4], -8));                     // Output: true
console.log(findPair([-4, 4], 8));                      // Output: true
console.log(findPair([1, 3, 4, 6], -2));                // Output: true
console.log(findPair([0, 1, 3, 4, 6], -2));             // Output: true