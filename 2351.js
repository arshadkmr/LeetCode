const letterAppearTwice = (string) => {
    let map = {}
    for (let i = 0; i < string.length; i++) {
        if (!map[string[i]]) {
            map[string[i]] = 1
        } else {
            return string[i]
        }
    }
}

s = 'abccbaacz'

console.log(letterAppearTwice(s));