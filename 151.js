const reverseWords = (s) => {
    return s.split(' ').reverse().filter((item) => item !== '').join(' ');
}

s = "a good   example"
console.log(reverseWords(s));