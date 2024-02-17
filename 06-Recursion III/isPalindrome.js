// isPalindrome

// Write a recursive function called isPalindrome which returns true 
// if the string passed to it is a palindrome (reads the same forward 
// and backward). Otherwise it returns false.

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

console.log(isPalindrome("menem"));

// isPalindrome("menem")
// m === m return isPalindrome("ene")
// e === e return isPalindrome("e")
// return true

// how slice works:
// const str = "Hello, world!";
// const slicedStr = str.slice(1, -1);
// console.log(slicedStr); // Output: "ello, world"