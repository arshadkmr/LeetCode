const sumOfSquares = (nums) => {
    let n = nums.length;
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            sum += nums[i-1] * nums[i-1]
        }
    }
    return sum
}

nums = [2, 7, 1, 19, 18, 3]

console.log(sumOfSquares(nums));
