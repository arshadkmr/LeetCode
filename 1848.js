const minDistance = (array, target, start) => {
    let index
    let gap = null
    if (array.length === 1) return 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            index = Math.abs(i - start)
        }
        if (gap === null ||gap===undefined) gap = index
        console.log(index);
        if (gap > index) {
            gap = index
        }
    }
    return gap
}
nums = [1,2,3,4,5], target = 5, start = 3
console.log(minDistance(nums, target, start));