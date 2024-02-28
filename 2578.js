const splitNum = (num) => {
    let res = 0
    let array = num.toString().split('').sort()
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        if (array.length <= 2) {
            res += Number(array[start])
            res += Number(array[end])
        } else if (start === end) {
            res += Number(array[start])
        } else {
            let str = array[start] + array[end]
            res += Number(str)
        }
        start++
        end--
    }
    return res
}

console.log(splitNum(999999999));