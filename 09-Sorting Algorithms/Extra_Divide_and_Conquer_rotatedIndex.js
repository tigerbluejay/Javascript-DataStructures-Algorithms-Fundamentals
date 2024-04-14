function findRotatedIndex(arr, target) {
    // Handle empty array or single element
    if (arr.length === 0) return -1;
    if (arr.length === 1) return arr[0] === target ? 0 : -1;
  
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      // Check if target is the middle element
      if (arr[mid] === target) return mid;
  
      // If the left part is sorted
      if (arr[left] <= arr[mid]) {
        // Check if target is within the sorted left part
        if (target >= arr[left] && target < arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else { // Right part is sorted
        // Check if target is within the sorted right part
        if (target > arr[mid] && target <= arr[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  
    // Target not found
    return -1;
  }
  
  // Test cases
  console.log(findRotatedIndex([3, 4, 1, 2], 4)); // Output: 1
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // Output: 2
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // Output: 6
  console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // Output: -1
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // Output: -1
  console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // Output: 5