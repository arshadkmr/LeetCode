const getLucky = (s, k) => {
    let sum = ''
    for (let i = 0; i < s.length; i++) {
        sum += ((s.charCodeAt(i) - 96).toString())
    }
    for (let j = 1; j < k; j++) {
        let sumStr = sum.toString()
        sum = 0
        for (let k = 0; k < sumStr.length; k++) {
            sum += Number(sumStr[k])
        }
    }
    return sum
}

console.log(getLucky('leetcode', 3));