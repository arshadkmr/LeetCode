const lengthOfLastWord = (s) => {
    let array = s.split(' ')
    let lastWord = ''
    for (let word of array) {
        if (word.length > 0) lastWord = word
    }
    return lastWord.length
}


s = "luffy is still joyboy"
console.log(lengthOfLastWord(s));