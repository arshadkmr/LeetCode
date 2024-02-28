const longestBalancedSubstring = (s) => {
    let result = 0
    let substr = ''
    for (let i = 0; i < s.length / 2; i++) {
        substr = '0' + substr + '1'
        if (s.includes(substr)) {
            result = substr.length
        } else {
            return result
        }
    }
    return result
}

s = "01000111"
console.log(longestBalancedSubstring(s));