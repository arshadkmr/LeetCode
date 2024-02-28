const removeTrailingZeros = (num) => {
    let array = num.split('')
    while(array[array.length - 1]==='0'){
        array.pop()
    }
    return array.join('')
}

num = "51230100"
console.log(removeTrailingZeros(num));