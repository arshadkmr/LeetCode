const findPeaks = (mountain) => {
    let result = []
    for (let i = 1; i < mountain.length - 1; i++) {
        if ((mountain[i] > mountain[i - 1]) && (mountain[i] > mountain[i + 1])) {
            result.push(i)
        }
    }
    return result
}

mountain = [1,4,3,8,5]
findPeaks(mountain)