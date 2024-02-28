const maxProduct = (array) => {
    let length = array.length
    array.sort((a, b) => a - b)
    let product = ((array[length - 1] * array[length - 2]) - (array[0] * array[1]))
    return product
}
num =[4,2,5,9,7,4,8]
console.log(maxProduct(num));