const generateMatrix = (n) => {
    let array = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let count = 1, top = 0, bottom = n - 1, left = 0, right = n - 1

    while (count <= n * n) {
        for (let i = left; i <= right; i++) {
            array[top][i] = count
            count++
        }
        top++
        for (let i = top; i <= bottom; i++) {
            array[i][right] = count
            count++
        }
        right--
        for (let i = right; i >= left; i--) {
            array[bottom][i] = count
            count++
        }
        bottom--
        for (let i = bottom; i >= top; i--) {
            array[i][left] = count
            count++
        }
        left++
    }
    return array
}

generateMatrix(3)