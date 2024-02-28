const areAlmostEqual = (string1, string2) => {
    if (string1.split('').sort().join() === string2.split('').sort().join()) {
        let count = 0
        for (let i = 0; i < string1.length; i++) {
            if (string1[i] !== string2[i]) {
                count++
                if (count > 2) {
                    return false
                }
            }
        }
        return true
    }
    return false
}

s1 = "abcd", s2 = "dcba"
console.log(areAlmostEqual(s1, s2));