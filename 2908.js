const minimumSum = (nums) => {
    let sum = Infinity
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (i < j && j < k && nums[i] < nums[j] && nums[k] < nums[j]) {
                    let total = nums[i] + nums[j] + nums[k];
                    sum = Math.min(sum, total)
                }
            }
        }
    }
    return sum !== Infinity ? sum : -1
}

nums = [6,5,4,3,4,5]
console.log(minimumSum(nums));