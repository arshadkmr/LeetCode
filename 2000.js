const reversePrefix = (word, ch) => {
    let result = []
    let array = word.split('')
    for (let i = 0; i < array.length; i++) {
        if (array[i] === ch) {
            let j = i
            while (j >= 0) {
                result.push(array[j])
                j--
            }
            break
        }
    }
    if(result.length<array.length) {
        for(let i =result.length; i < array.length;i++){
            result.push(array[i])
        }
    }
    return result.join('')
}
word = "xyxzxe", ch = "z"
console.log(reversePrefix(word, ch));