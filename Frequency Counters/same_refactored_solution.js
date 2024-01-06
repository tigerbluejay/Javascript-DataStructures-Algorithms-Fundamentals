// FREQUENCY COUNTER - REFACTORED SOLUTION

// Write a function called same.
// The function accepts two arrays
// The function should return true if every value in the array
// has its corresponding value squared in the second array
// (not ncessarily in the same order in both arrays)
// The frecuency of values should be the same.


function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

// frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
// This line does two things:
// Checks for Existing Count:
// frequencyCounter1[val] || 0: This part checks if the value val already exists as a property in frequencyCounter1.
// If it exists, its current count is used.
// If it doesn't exist (undefined), it's treated as 0.
// Increments Count:
// The result of the first part is then added with 1, effectively incrementing the count of val in frequencyCounter1.
// This ensures that even the first occurrence of a value gets a count of 1.
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
   // here we check if the key in frequencyCounter1 exists squared in frequencyCounter2
   // if it doesnt we return false
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
    // here we check if the value of the squared key (the frequency) is the same as
    // the value for that key in the first frecuency counter
    // if its not we return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])

// Two non nested loops like the first two for loops here, will be O(2n)
// which is much better than two nested loops
// here we have O(3n) in total so its a lot better than the naive solution

