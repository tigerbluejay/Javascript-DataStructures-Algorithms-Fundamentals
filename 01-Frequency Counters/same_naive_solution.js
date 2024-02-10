// FREQUENCY COUNTER - NAIVE SOLUTION

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
    for(let i = 0; i < arr1.length; i++){
    	// IndexOf is looping so this is a nested loop
    	// instead of IndexOf we could loop thorugh the second array
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // correctIndex will be minus one when no index is found for that value
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        // removes the index from the second array
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])

// this solution is called naive because it is suboptimal
// it is not good to have a nested loop
// because it makes time complexity O(n squared)