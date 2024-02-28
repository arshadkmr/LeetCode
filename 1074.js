const numSubMatrixSumTarget = (matrix, target) => {
    const m = matrix.length;
    const n = matrix[0].length;

    const prefixSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            prefixSum[i][j] = matrix[i - 1][j - 1] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1];
        }
    }

    let count = 0;
    for (let r1 = 1; r1 <= m; r1++) {
        for (let r2 = r1; r2 <= m; r2++) {
            for (let c1 = 1; c1 <= n; c1++) {
                for (let c2 = c1; c2 <= n; c2++) {
                    const subMatrixSum = prefixSum[r2][c2] - prefixSum[r1 - 1][c2] - prefixSum[r2][c1 - 1] + prefixSum[r1 - 1][c1 - 1];
                    if (subMatrixSum === target) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
}

matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
console.log(numSubMatrixSumTarget(matrix, target));