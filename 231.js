const isPowerOfTwo = (n) => {
    // if (n === 1) return true
    // const isSquare = (n) => {
    //     let sqrt = Math.sqrt(n)
    //     console.log('sqrt : ', sqrt);
    //     if (sqrt === 2) return true
    //     if (sqrt > 2)
    //         return isSquare(sqrt)
    //     else return false
    // }
    // return isSquare(n)
    for (let i = 0; i < 32; i++) {
        if (n === Math.pow(2, i)) return true
    }
    return false
}

console.log(isPowerOfTwo(8));