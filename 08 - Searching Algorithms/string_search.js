// BRUTE FORCE / PATTERN MATCHING ALGORITHM

function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

// count keeps track of the number of times the inner loop
// ran without breaking (a match)

console.log(naiveSearch("lorie loled", "lol"));