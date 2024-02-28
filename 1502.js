const arithmeticProgression = (array) => {
    const sortArray = array.sort((a, b) => a - b)
    let result = sortArray[0] - sortArray[1]
    for (let i = 1; i < sortArray.length - 1; i++) {
        let diff = sortArray[i] - sortArray[i + 1]
        if (result !== diff) return false
    }
    return true
}

console.log(arithmeticProgression([1, 2, 4]));