const climbStairs = (n) => {
    let array = [0, 1]
    let num = 1
    for (let i = 1; i <= n; i++) {
        num = array[array.length - 1] + array[array.length - 2]
        array.push(num)
    }
    return array[array.length - 1]
}
console.log(climbStairs(4));