const minimizedStringLength = (s) => {
    return [...new Set(s.split(''))].length
}

s = "dddaaa"
console.log(minimizedStringLength(s));