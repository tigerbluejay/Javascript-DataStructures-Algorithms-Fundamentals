function sortedFrequency(arr, target) {
    // Helper function for binary search
    function binarySearch(left, right) {
      if (left > right) return -1; // Target not found
  
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        // Check left and right sides for occurrences
        let leftCount = 0;
        let rightCount = 0;
  
        // Count occurrences to the left (including mid)
        for (let i = mid - 1; i >= left && arr[i] === target; i--) {
          leftCount++;
        }
  
        // Count occurrences to the right (including mid)
        for (let i = mid + 1; i <= right && arr[i] === target; i++) {
          rightCount++;
        }
  
        return leftCount + rightCount + 1; // Add mid occurrence
      } else if (arr[mid] < target) {
        return binarySearch(mid + 1, right);
      } else {
        return binarySearch(left, mid - 1);
      }
    }
  
    return binarySearch(0, arr.length - 1);
  }
  
  // Examples
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1