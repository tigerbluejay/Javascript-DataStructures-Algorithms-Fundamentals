function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));
  
  
    // edge case: make sure the array is not longer
    // than the number of digits we are trying to sum
    
    // here we make sure we don't slide the sliding window
    // beyond the bounds of the array
  
      // this inner loop is the window itself
      // when i = 0, it will do j=0, then j=1, then j=2
      // it will keep adding these values to temp
      // when i = 1 the window will be moved
      // it will add the window sized number of values
      // to temp, then the loop will exit
      // temp will be set, and in the next loop
      // temp will be reset to 0.
  
      // save to max the temp only
      // if the temp is larger
      // on each iteration

// MAX SUM REFACTORED - REFACTORED SOLUTION
// O(N) complexity (better than the nested loops above)

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      // here what we do is to our initial temp sum
      // (from our previous loop) we substract the first
      // digit of the window (arr[i - num]) and then we add
      // the next digit not previously considered (arr[i])
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));