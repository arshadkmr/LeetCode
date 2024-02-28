const isSameAfterReverse = (num) => {
    let array = num.toString().split('');
    let string = array.reverse().join('')
    let finalArray = string.split('');
    for (let i = 0; i < finalArray.length; i++) {
        i=0
        if (finalArray[i] != '0') break
        finalArray.shift()
    }
    let finalString = finalArray.reverse().join('')
    if (finalString == num) {
        return true
    } else {
        return false
    }
}

console.log(isSameAfterReverse(0));