// reverse

// Write a recursive function called reverse which accepts a string and 
// returns a new string in reverse.

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

console.log(reverse("elephant"));

// reverse("lephant")               + e
// reverse("ephant")            + l + e
// reverse("phant")           e + l + e
// and so on
