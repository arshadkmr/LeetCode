const findWordsContaining = (words, x) => {
    let result=[]
    const regex = new RegExp(`${x}`)
    for (let i = 0; i < words.length; i++) {
        if (regex.test(words[i])) {
            result.push(i)
        }
    }
    return result
}

words = ["abc","bcd","aaaa","cbc"], x = "a"

findWordsContaining(words, x)