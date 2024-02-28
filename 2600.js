const kWithMaximumSum = (numOnes, numZeros, numNegOnes, k) => {
    let array = []
    let sum=0
    let i = 0
    while (i < numOnes) {
        array.push(1)
        i++
    }
    i = 0
    while (i < numZeros) {
        array.push(0)
        i++
    }
    i = 0
    while (i < numNegOnes) {
        array.push(-1)
        i++
    }
    for (let i = 0; i < k; i++) {
        sum+=array[i]
    }
    return sum
}

console.log(kWithMaximumSum(3,2,0,4));