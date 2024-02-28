const numberGame = (nums) => {
    let res = []
    nums.sort((a, b) => a - b)
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        res.push(nums[i + 1]);  // Alice's move
        res.push(nums[i]);  // Bob's move
        i++
    }
    return res
}

nums = [2,5]
console.log(numberGame(nums));