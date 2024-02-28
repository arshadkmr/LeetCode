const isAnagram = (str1, str2) => {
    let map = {}
    for (let char of str1) {
        if (!map[char]) {
            map[char] = 1
        } else {
            map[char]++
        }
    }
    for (let char of str2) {
        if (!map[char]) {
            return false
        } else if (map[char]) {
            map[char]--
        }
        if (map[char] === 0) delete map[char]
    }
    return Object.keys(map).length === 0
}

s = 'a', t = 'ab'

console.log(isAnagram(s, t));