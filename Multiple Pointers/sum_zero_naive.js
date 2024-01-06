// MULTIPLE POINTERS - NAIVE SOLUTION

// Write a function called sumZero which accepts
// a sorted array of integers. This function should find
// the first pair where the sum is 0.
// Return an array taht includes both values that sum to zero
// or undefined if a pair does not exist

function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))

// The naive solution has quadratic time complexity
// i stays still on one item while the other j loops through the
// entire array


// MULTIPLE POINTERS - REFACTORED SOLUTION

function newSumZero(arr){
	let left = 0;
	let right = arr.length - 1;
	while (left < right){
		let sum = arr[left] + arr[right];
		if (sum === 0){
			return [arr[left], arr[right]];
		} else if (sum > 0){
			right--;
		} else {
			left++;
		}
	}
}

console.log(newSumZero([-4,-3,-2,-1,0,1,2,3,10]))

// Time complexity O(N)
// Space complexity O(1)