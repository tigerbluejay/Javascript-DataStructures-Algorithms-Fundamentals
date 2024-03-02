function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums){
      let maxDigitCount = mostDigits(nums);
      // loop maxDigitCount amount of times
      for(let k = 0; k < maxDigitCount; k++){
          // 10 digit buckets
          let digitBuckets = Array.from({length: 10}, () => []);
          for(let i = 0; i < nums.length; i++){
              let digit = getDigit(nums[i],k);
              digitBuckets[digit].push(nums[i]);
          }
          // the entire line of code effectively combines 
          // the elements from all the arrays within digitBuckets 
          // into a single new array and stores the result in the 
          // nums variable.
          nums = [].concat(...digitBuckets);
      }
      // nums returned is equal to the value of the
      // last nums array of the last iteration of the main
      // for loop
      return nums;
  }
  
  radixSort([23,345,5467,12,2345,9852])
  