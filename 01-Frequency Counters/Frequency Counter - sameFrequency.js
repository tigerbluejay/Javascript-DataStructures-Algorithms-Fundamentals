// Frequency Counter - sameFrequency
// Write a function called sameFrequency. 
// Given two positive integers, find out if the two 
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {

  // Convert numbers to strings and split into digits
    const num1Str = String(num1).split("");
    const num2Str = String(num2).split("");
  
    // Check if lengths are equal 
    // (different lengths imply different frequencies)
    if (num1Str.length !== num2Str.length) return false;
  
    // Create a frequency counter object for each number
    const num1Freq = {};
    const num2Freq = {};
  
    // Count occurrences of each digit in both numbers
    for (const digit of num1Str) {
      num1Freq[digit] = (num1Freq[digit] || 0) + 1;
    }
    for (const digit of num2Str) {
      num2Freq[digit] = (num2Freq[digit] || 0) + 1;
    }
  
    // Compare frequencies directly using object comparison
    return JSON.stringify(num1Freq) === JSON.stringify(num2Freq);
  }
  
  // Test cases
  console.log(sameFrequency(182, 281)); // true
  console.log(sameFrequency(34, 14)); // false
  console.log(sameFrequency(3589578, 5879385)); // true
  console.log(sameFrequency(22, 222)); // false