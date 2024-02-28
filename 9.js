const isPalindrome = (num)=>{
    let number = num.toString().split('').reverse().join('')
    return number==num
}

console.log(isPalindrome(121));