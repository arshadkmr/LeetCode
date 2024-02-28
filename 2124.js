const checkString = (s) => {
    let copiedString = s.split('').sort().join('');
    return copiedString===s
}

s = "babb"
console.log(checkString(s));