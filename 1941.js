const countOccurrences = (s) => {
    let res = []
    let sorted = s.split('').sort().join('')
    let count = 1
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            count++
        } else {
            res.push(count)
            count = 1
        }
    }
    res.push(count)
    for (let i = 0; i < res.length - 1; i++) {
        if (res[i] !== res[i + 1]) {
            return false
        }
    }
    return true
}

s = "aaabbb"
console.log(countOccurrences(s));
