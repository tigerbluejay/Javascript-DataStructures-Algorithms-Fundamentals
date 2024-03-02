function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  /*
  In essence, this code snippet calculates the number of digits required to represent the absolute value of the input number num.

    Here's a breakdown of how it works for different inputs:

    Input: 123:

    Math.abs(123) = 123
    Math.log10(123) ≈ 2.096
    Math.floor(2.096) = 2
    Therefore, the number of digits is 2 + 1 = 3
*/


  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  mostDigits([23,567,89,12234324,90])
  
  
  