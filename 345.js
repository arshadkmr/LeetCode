const reverseVowels = (s) => {
    let array = s.split('')
    let i = 0
    let j = array.length - 1
    const regex = /[aeiou]/i
    while (i < j) {
        if (!regex.test(array[i])) {
            i++
        }
        if (!regex.test(array[j])) {
            j--
        }
        if (regex.test(array[i]) && regex.test(array[j])) {
            [array[i], array[j]] = [array[j], array[i]]
            i++
            j--
        }
    }
    return array.join('')
}


s = "a.b,."
console.log(reverseVowels(s));