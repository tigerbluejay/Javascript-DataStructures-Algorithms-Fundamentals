function coinChange(denominations, value) {
    const ways = new Array(value + 1).fill(0);
    ways[0] = 1; // There is one way to make change for 0
    
    for (let coin of denominations) {
        for (let amount = coin; amount <= value; amount++) {
            ways[amount] += ways[amount - coin];
        }
    }
    
    return ways[value];
}

const denominations = [1, 5, 10, 25];
console.log(coinChange(denominations, 1));    // 1
console.log(coinChange(denominations, 2));    // 1
console.log(coinChange(denominations, 5));    // 2
console.log(coinChange(denominations, 10));   // 4
console.log(coinChange(denominations, 25));   // 13
console.log(coinChange(denominations, 45));   // 39
console.log(coinChange(denominations, 100));  // 242
console.log(coinChange(denominations, 145));  // 622
console.log(coinChange(denominations, 1451)); // 425663
console.log(coinChange(denominations, 14511));// 409222339