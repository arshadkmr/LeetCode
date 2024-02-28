const maxStrongPairXOR = (nums) => {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    let max_xor = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
                let xor_value = nums[i] ^ nums[j];
                max_xor = Math.max(max_xor, xor_value);
            }
        }
    }
    return max_xor;
}
nums = [5,6,25,30]
console.log(maxStrongPairXOR(nums));