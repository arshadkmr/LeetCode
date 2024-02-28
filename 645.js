const findErrorNum = (nums) => {
    let reqSum = nums.length * (nums.length + 1) / 2
    let duplicate = null
    let map = {}
    for (let num of nums) {
        if (!map[num]) {
            map[num] = 1
        }
        else {
            duplicate = num
            break
        }
    }
    let sum = nums.reduce((acc, item) => item + acc, 0)
    let reqNum = reqSum - (sum - duplicate)
    return [duplicate, reqNum]
}

nums = [3, 2, 2]
console.log(findErrorNum(nums));