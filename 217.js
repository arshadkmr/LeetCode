const containsDuplicate = (nums) => {
    let map = {}
    for (let item of nums) {
        if (!map[item]) map[item] = 1
        else return true
    }
    return false
}
nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

console.log(containsDuplicate(nums));