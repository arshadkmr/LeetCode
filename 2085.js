const countWords = (word1, word2) => {
    let count=0
    let hash1 = {}
    let hash2 = {}
    for (let item of word1) {
        hash1[item] = hash1[item] + 1 || 1
    }
    for (let item of word2) {
        hash2[item] = hash2[item] + 1 || 1
    }
    for (let item in hash1) {
        if (hash2[item] === 1 && hash1[item] === 1){
            count++
        }
    }
    return count
}
words1 = ["a","ab"], words2 = ["a","a","a","ab"]

console.log(countWords(words1, words2));