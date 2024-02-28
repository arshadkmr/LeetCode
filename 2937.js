const findMinimumOperations = (s1, s2, s3) => {
    let minimumLength = Math.min(s1.length, s2.length, s3.length);
    let commonLength = 0
    let result = -1
    for (let i = 0; i < minimumLength; i++) {
        if ((s1[i] === s2[i]) && (s2[i] === s3[i]) && (s3[i] === s1[i])) {
            commonLength += 1
        } else {
            break
        }
    }
    if (commonLength !== 0) {
        result = 0
        result += s1.length - commonLength
        result += s2.length - commonLength
        result += s3.length - commonLength
    }
    return result
}

s1 = "abc", s2 = "abb", s3 = "ab"

console.log(findMinimumOperations(s1, s2, s3));