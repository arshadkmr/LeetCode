const hasTrailingZeros = (nums) => {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i].toString(2)
        console.log(x);
        if (x[x.length - 1] == 0) {
            count++
        }
    }
    return count >= 2 ? true : false
}

nums =  [1,2,3,4,5]
console.log(hasTrailingZeros(nums));