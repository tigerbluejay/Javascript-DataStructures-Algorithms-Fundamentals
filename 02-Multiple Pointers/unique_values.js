// we should sort the array first

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1,2,2,5,7,7,99]));

    // if the array is empty return 0
    // i is a pointer
    // loop through the array once
    // j is the second pointer
        // only when the two pointers point to
        // different elements
            // increment the first pointer by 1
            // assign the value of the second pointer
            // to the first
// i, the trailing pointer will increment only when 
// the values pointed at are different
// in practise, i is counting the unique values, but
// j is looping through all the values to check.