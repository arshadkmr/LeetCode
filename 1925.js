const countTriplets = (num) => {
    let count = 0
    for (let i = 1; i < num; i++) {
        for (let j = i + 1; j <= num; j++) {
            let sqrt = Math.sqrt((i * i) + (j * j))
            if (sqrt > num) break
            if (Number.isInteger(sqrt)) count += 2
        }
    }
    return count
}

console.log(countTriplets(5));