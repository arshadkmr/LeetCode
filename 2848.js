const numberOfPoints = (nums) => {
    const coveredPoint = new Set()
    nums.forEach(car => {
        let start = car[0]
        let end = car[1]
        for (let point = start; point <= end; point++) {
            coveredPoint.add(point)
        }
    });
    return coveredPoint.size
}

nums = [[3, 6], [1, 5], [4, 7]]
console.log(numberOfPoints(nums));