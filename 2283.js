const digitCount = (num) => {
    let map = {}
    for (let char of num) {
        if (!map[char]) {
            map[char] = 1
        } else {
            map[char]++
        }
    }
    for (let key in map) {
        if (num[key] != map[key]) {
            return false
        }
    }
    return true
}
num = "521001000"
console.log(digitCount(num));