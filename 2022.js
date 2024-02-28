const construct2DArray = (original, m, n) => {
    let result = []
    if (m * n === original.length) {
        for (let i = 0, l = 0; i < m; i++) {
            result[i] = []
            for (let j = 0; j < n; j++) {
                result[i][j] = original[l++]
            }
        }
    }
    return result
}
original = [9, 8, 2, 4, 4, 2, 6, 1, 10, 9, 4, 10], m = 4, n = 3

console.log(construct2DArray(original, m, n));