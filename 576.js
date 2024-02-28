const findPaths = (m, n, maxMove, startRow, startColumn) => {
    // const dp = new Array(m ).fill(0).map(() => new Array(n).fill(0))
    // console.log(dp);
    const MOD = 1000000007;
    const memo = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => Array(maxMove + 1).fill(-1))
    );

    const dfs = (row, col, move) => {
        if (row < 0 || col < 0 || row >= m || col >= n) {
            return 1;
        }
        if (move === 0) {
            return 0;
        }
        if (memo[row][col][move] !== -1) {
            return memo[row][col][move];
        }
        let paths = 0;
        paths += dfs(row + 1, col, move - 1) % MOD;
        paths += dfs(row - 1, col, move - 1) % MOD;
        paths += dfs(row, col + 1, move - 1) % MOD;
        paths += dfs(row, col - 1, move - 1) % MOD;
        memo[row][col][move] = paths % MOD;
        return memo[row][col][move];
    };

    return dfs(startRow, startColumn, maxMove) % MOD;
}
m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
console.log(findPaths(m, n, maxMove, startRow, startColumn));