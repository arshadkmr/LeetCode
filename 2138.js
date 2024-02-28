const dividerString = (string, k, fill) => {
    let result = []
    for (let i = 0; i < string.length; i++) {
        if (i + k <= string.length) {
            result.push(string.slice(i, i + k))
            i = i + k - 1
        } else {
            let n = []
            let temp = new Array(k - (string.length - i))
            n = [...string.slice(i, string.length), temp.fill(fill).join('')]
            let m = n.join('')
            result.push(m)
            i = string.length
        }
    }
    return result
}

s = "abcdefghijk", k = 3, fill = "x"
console.log(
    dividerString(s, k, fill));