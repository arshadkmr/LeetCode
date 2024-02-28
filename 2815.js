const maximum = (array) => {
    return array.reduce((acc, item) => {
        if (item > acc) {
            acc = item
        }
        return acc
    }, 0)
}
const maxSum = (nums) => {
    let map = {}
    let result = -1
    for (let i = 0; i < nums.length; i++) {
        // if (nums[i].toString().length > 1) {
            let splitted = nums[i].toString().split('')
            let maxValue = maximum(splitted)
            if (!map[maxValue]) {
                map[maxValue] = [nums[i]]
            } else {
                map[maxValue].push(nums[i])
            }
        // }
    }
    let filterdArray = Object.values(map).filter(item => item.length > 1)
    for (let item of filterdArray) {
        item.sort((a, b) => b - a)
        let sum = item[0]+item[1];
        result = result > sum ? result : sum
    }
    return result
}


nums = [84, 91, 18, 59, 27, 9, 81, 33, 17, 58]
console.log(maxSum(nums));
