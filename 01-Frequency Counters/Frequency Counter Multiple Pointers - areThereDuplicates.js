// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates 
// which accepts a variable number of arguments, and checks 
// whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the 
// multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// FREQUENCY COUNTER SOLUTION - O(N)
function areThereDuplicates(...args) {
    // Create a frequency counter object
    const freqCounter = {};
    for (const arg of args) {
      // Check if the argument already exists in the counter
      if (freqCounter[arg]) {
        return true; // Duplicate found
      }
      // Add the argument to the counter with a count of 1
      freqCounter[arg] = 1;
    }
    // No duplicates found
    return false;
  }
// MULTIPLE POINTERS SOLUTION - O(N)
function areThereDuplicates(...args) {
    args.sort(); // Sort the arguments to bring duplicates together
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === args[i + 1]) {
        return true; // Duplicate found
      }
    }
    // No duplicates found
    return false;
  }

// FREQUENCY COUNTER SOLUTION - (O(n log n) Time, O(1) Space):

function areThereDuplicates_FC(...args) {
  // Sort the arguments in-place (modifies the original array)
  args.sort();

  // Iterate through the sorted array and check for consecutive 
  // duplicates
  for (let i = 1; i < args.length; i++) {
    if (args[i] === args[i - 1]) {
      return true;
    }
  }
  // No duplicates found
  return false;
}

// MULTIPLE POINTERS SOLUTION - (O(n log n) Time, O(1) Space):

function areThereDuplicates_MP(...args) {
    // Convert arguments to a Set (removes duplicates)
    const seen = new Set(args);
  
    // Check if the number of unique elements matches 
    // the original argument length
    return seen.size !== args.length;
  }
