const maximumDifference = (num) => {
    let maxDiff = -Infinity
    for (let i = 0; i < num.length - 1; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] < num[j]) {
                let diff = num[j] - num[i]
                if (maxDiff < diff) maxDiff = diff
            }
        }
    }
    return maxDiff === -Infinity ? -1 : maxDiff
}
let array = [1,5,2,10]
console.log(maximumDifference(array));