const findChampions = (grid) => {
    let map = {}
    let n = grid.length
    for (let i = 0; i < n; i++) {
        let sum = grid[i].reduce((acc, item) => acc + item, 0)
        if (!map[sum]) map[sum] = i
    }
    return map[n - 1]
}

grid = [[0, 1], [0, 0]]
findChampions(grid)