// A design pattern commonly used with recursion
// HELPER METHOD RECURSION
// helps have a piece of code that persists
// like here "result"

// we have the outter function
function collectOddValues(arr){

    let result = [];
    // we have the inner recursive helper function
    // which calls itself recursively
    function helper(helperInput){
        if(helperInput.length === 0) { return; }
        if(helperInput[0] % 2 !== 0) {result.push(helperInput[0])}
        helper(helperInput.slice(1))
    }
    // here we call the helper function
    helper(arr)
    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])