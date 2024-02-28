const numDifferentInteger = (string) => {
     // edge cases:
    // remove leading 0s
    // use a set to track unique integers
    const regexCharIsLetter = /[a-z]/g;
    const noLetters = word.replaceAll(regexCharIsLetter, " ");
    const regexCharIsDigit = /\d+/g;
    const integers = noLetters.match(regexCharIsDigit);
    if (!integers) return 0
    const noLeadingZeros = integers.map(integer => integer.replace(/^0+/, ''))
    const unique = new Set(noLeadingZeros);
    return unique.size
}

let word = "4e8t080o"

console.log(numDifferentInteger(word));
