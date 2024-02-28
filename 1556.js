const thousandsSeparator = (n) => {
    let str = n.toString()
    if (n < 1000) return str
    let array = str.split('').reverse()
    if (n < 1000000 && n >= 1000) {
        array.splice(3, 0, '.')
    }
    if (n < 1000000000 && n >= 1000000) {
        array.splice(3, 0, '.')
        array.splice(7, 0, '.')
    }
    if (n >= 1000000000) {
        array.splice(3, 0, '.')
        array.splice(7, 0, '.')
        array.splice(11, 0, '.')
    }
    let result = array.reverse().join('')
    return result
}
let n = 749371

console.log(thousandsSeparator(n));