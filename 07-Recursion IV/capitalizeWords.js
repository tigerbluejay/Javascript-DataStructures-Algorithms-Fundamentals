
// capitalizeWords
// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing 
// each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
  }
    // array.slice(array.length-1) returns the last sliced word
    // then converts it to uppercase
    // then pushes it to res

const words = ["hello", "world", "how", "are", "you"];
const capitalizedWords = capitalizeWords(words);
console.log(capitalizedWords); // Output: ["HELLO", "WORLD", "HOW", "ARE", "YOU"]

