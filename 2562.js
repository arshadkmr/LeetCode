const findTheArrayConcVal = (nums) => {
    let res = 0
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        if (start == end) {
            res += nums[start]
        } else {
            let str = nums[start].toString() + nums[end]
            res += Number(str)
        }
        start++
        end--
    }
    return res
}

nums = [7,52,2,4]

console.log(findTheArrayConcVal(nums));