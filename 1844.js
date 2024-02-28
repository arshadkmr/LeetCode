const replaceDigits = (s) => {
    const regexCharIsLetter = /[0-9]/g;
    let array = s.split("")
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if (regexCharIsLetter.test(array[i])) {
            const prevChar = array[i - 1]
            const shiftAmount = parseInt(array[i])
            const newChar = String.fromCharCode(prevChar.charCodeAt(0) + shiftAmount)
            array[i] = newChar
        }
    }
    return array.join("")
}

s = "a1c1e1"
console.log(replaceDigits(s));