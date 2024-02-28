const canBeEqual = (s1, s2) => {
    let array = s1.split('')
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (j - i == 2&&s2[i]!==array[i]&&s2[j]!==array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
    console.log(array);
    return array.join('') === s2
}

s1 = "bnxw", s2 = "bwxn"
console.log(canBeEqual(s1, s2));