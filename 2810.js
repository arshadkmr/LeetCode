const finalString = (s) => {
    let res = ''
    for (let char of s) {
        if (char === 'i') res = res.split('').reverse().join('')
        else res += char
    }
    return res
}

s = "poiinter"
console.log(finalString(s));