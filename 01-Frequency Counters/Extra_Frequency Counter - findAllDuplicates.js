function findAllDuplicates(nums) {
    const duplicates = [];
    const frequency = new Map();

    // Count the frequency of each number
    for (const num of nums) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    // Iterate through the frequency map and find duplicates
    for (const [num, count] of frequency.entries()) {
        // here we find and return all the elements that appear twice
        if (count === 2) {
            duplicates.push(num);
        }
    }

    return duplicates;
}

// Test cases
console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));        // Output: [2, 3]
console.log(findAllDuplicates([4, 3, 2, 1, 0]));                 // Output: []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));        // Output: [1, 2, 3]