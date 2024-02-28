const isPalindrome = (s) => {
    let updatedValue =  s.match(/[a-z0-9]/ig).join('').toLowerCase()
    console.log(updatedValue);
    let reverse = updatedValue.split('').reverse().join('').toLowerCase()
    return updatedValue === reverse
}

s = "0P"

console.log(isPalindrome(s));