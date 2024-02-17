// someRecursive

// Write a recursive function called someRecursive which accepts an 
// array and a callback. The function returns true if a single value in 
// the array returns true when passed to the callback. Otherwise it 
// returns false.

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

// the callback function (isOdd) is checked for every
// element in the array. If the callback check is true
// for any element then the recursive function returns true
// if it's not true for all the callback,
// the recursive function is called again on the next item on the array.

// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false

function isOdd(number) {
    return number % 2 != 0;
  }
const numbers = [1, 3, 5, 8, 10];
console.log(someRecursive(numbers, isOdd));  