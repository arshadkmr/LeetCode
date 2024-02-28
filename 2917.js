const findKOr = (nums, k) => {
    const n = nums.length
    let result = 0


    for (let bit = 0; bit < 32; bit++) {
        let count = 0
        for (let i = 0; i < n; i++) {
            if ((nums[i] & (1 << bit)) !== 0) {
                count++
            }
        }
        if (count >= k) {
            result |= (1 << bit)
        }
    }
    return result
}
nums = [7, 12, 9, 8, 9, 15], k = 4

console.log(findKOr(nums, k));