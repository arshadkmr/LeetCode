const distributeCandies = (n, limit) => {
    let totalWays = 0;
    for (let firstAmount = Math.max(0, n - limit * 2); firstAmount <= Math.min(n, limit); firstAmount++) {
        let remaining = n - firstAmount;
        let max = Math.min(limit, remaining);
        let min = remaining - max;
        let ways = max - min + 1;
        totalWays += ways;
    }
    return totalWays;
}

// Example usage:
const n = 3;
const limit = 3;
console.log(distributeCandies(n, limit)); // Output: 66
