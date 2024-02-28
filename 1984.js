const minimumDifference = (num, k) => {
    let array=[]
    if (num.length === 1) return 0
    let diff = Math.abs(num[0] - num[1])
    for (let i = 0; i < num.length - 1; i++) {
        for (let j = i + 1; j < num.length; j++) {
            array.push(Math.abs(num[i] - num[j]))
            if (Math.abs(num[i] - num[j]) < diff) {
                diff = Math.abs(num[i] - num[j])
            }
        }
    }
    let reversed = array.reverse()
    let setArray = [...new Set(reversed)]
    return setArray[k]
}
nums = [87063,61094,44530,21297,95857,93551,9918], k = 6
console.log(minimumDifference(nums,k));
