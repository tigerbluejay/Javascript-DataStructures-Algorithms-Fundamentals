function countZeroes(arr) {
    if (!arr.length) return 0;
  
    return _countZeroes(arr, 0, arr.length - 1);
  }
  
  function _countZeroes(arr, low, high) {
    if (low > high) return 0;
  
    const mid = Math.floor((low + high) / 2);
  
    if (arr[mid] === 0) {
      return (high - mid + 1) + _countZeroes(arr, low, mid - 1);
    } else {
      return _countZeroes(arr, mid + 1, high);
    }
  }
  
  // Test cases
  console.log(countZeroes([1, 1, 1, 1, 0, 0])); // Output: 2
  console.log(countZeroes([1, 0, 0, 0, 0])); // Output: 4
  console.log(countZeroes([0, 0, 0])); // Output: 3
  console.log(countZeroes([1, 1, 1, 1])); // Output: 0

  /*
  The divide-and-conquer approach presented earlier relies on the array
   being sorted for efficient searching of the transition point between 
   1s and 0s. This wouldn't work for an unsorted array. */

/*
   so this checks recursively doing a binary search style and inferring 
   how many zeroes there are

   Yes, that's a good way to understand the divide-and-conquer approach we 
   discussed earlier. It leverages a binary search-like strategy but 
   focuses on finding the transition point between 1s and 0s instead of 
   a specific value.

    Here's a breakdown of how it infers the number of zeroes:

The divide-and-conquer approach relies on a sorted array where all 1s 
are grouped before all 0s. It finds the transition point between these 
two sections to determine the number of zeroes efficiently.

We recursively divide the array in half until we reach a 
single-element subarray.
At the midpoint of the subarray, we check the element's value:
If it's 1: Since the array is sorted with 1s before 0s, this implies 
all zeroes are in the right half of the subarray. We continue the 
recursion there to find them.
If it's 0: This indicates we've reached (or crossed) the transition point. 
All elements from this point onwards are likely 0s. We calculate the number 
of zeroes by considering the remaining elements in this subarray 
(including the mid element which is 0) and recursively search for zeroes 
in the left half (there might be some lingering 1s there).
By using recursion and the knowledge of the sorted order (1s before 0s), 
we can efficiently determine the number of zeroes in the array.
*/