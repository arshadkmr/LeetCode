const firstPalindrome = (array) => {
    for (let item of array) {
        let reverse = item.split('').reverse().join('')
        if(item === reverse){
            return item
        }
    }
    return ''
}
words = ["def","ghi"]

console.log(firstPalindrome(words));