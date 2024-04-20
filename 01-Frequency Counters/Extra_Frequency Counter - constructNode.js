function constructNote(message, letters) {
    if (message.length > letters.length) {
        return false;
    }

    // Count the frequency of each letter in the letters string
    const letterCount = new Map();
    for (const letter of letters) {
        letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
    }

    // Check if the message can be constructed using the available letters
    for (const char of message) {
        if (!letterCount.has(char) || letterCount.get(char) === 0) {
            return false;
        } else {
            letterCount.set(char, letterCount.get(char) - 1);
        }
    }

    return true;
}

// Test cases
console.log(constructNote('aa', 'abc'));         // Output: false
console.log(constructNote('abc', 'dcba'));       // Output: true
console.log(constructNote('aabbcc', 'bcabcaddff')); // Output: true