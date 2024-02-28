const findMissingAndRepeatingValue = (grid) => {
    let map = {}
    let duplicateElement = 0
    let currentSum = 0
    const flatted = grid.flat()
    for (let item of flatted) {
        currentSum += item
        if (!map[item]) {
            map[item] = 1
        } else {
            duplicateElement = item
        }
    }
    const requiredSum = flatted.length*(flatted.length+1)/2
    const missingElement = requiredSum-(currentSum-duplicateElement)
    return [duplicateElement, missingElement]
}

grid = [[9,1,7],[8,9,2],[3,4,6]]

console.log(findMissingAndRepeatingValue(grid));