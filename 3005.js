const maxFrequencyElements = (nums) => {
    let max = 0
    let total = 0
    let map = {}
    for (let num of nums) {
        if (!map[num]) {
            map[num] = 1
        } else {
            map[num]++
        }
    }
    Object.values(map).forEach(item => {
        if (item > max) max = item
    })
    Object.keys(map).forEach(key => {
        if (map[key] === max) {
            total += max
        }
    })
    return total
}

nums = [1, 2, 2, 3, 1, 4]
maxFrequencyElements(nums)