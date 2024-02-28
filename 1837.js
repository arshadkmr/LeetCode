const sumBase = (n, k) => {
    let sum = 0
    while (n > 0) {
        sum += n % k
        n = ~~(n / k)
    }
    return sum
}
n = 42, k = 2

console.log(sumBase(n, k));