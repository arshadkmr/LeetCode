const largestOddNumber = (string) => {
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] % 2 !== 0) return string.slice(0, i + 1)
        return ""
    }
}
num = "52"
console.log(largestOddNumber(num));