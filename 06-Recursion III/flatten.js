// flatten

// Write a recursive function called flatten which accepts an array of arrays 
// and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]

function flatten(oldArr){
    var newArr = []
        // this loop runs the lenght of the array in question
        // (first the original - then the nested)
        for(var i = 0; i < oldArr.length; i++){
          // check if the item is an array itself
          if(Array.isArray(oldArr[i])){
            // if it is concat the items within to the new array
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
            /// if it is not add the item to the new array
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }

const nestedArray = [1, [2, 3], 4, [5, [6, 7]]];
const flattenedArray = flatten(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]