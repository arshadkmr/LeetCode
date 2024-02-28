const truncateSentence = (string, k) => {
    let array = string.split(' ');
    array.length = k
    return array.join(' ')
}

s = "Hello how are you Contestant", k = 4
console.log(truncateSentence(s, k));