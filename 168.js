const convertToTitle = (columnNumber) => {
    if (columnNumber === 0) return null
    let result = ''
    while (columnNumber > 0) {
        let reminder = columnNumber % 26
        let number = parseInt(columnNumber / 26)
        if (reminder === 0) {
            reminder = 26
            number = number - 1
        }
        result += String.fromCharCode(reminder + 64)
        columnNumber = number
    }
    return result.split('').reverse().join('')
}
console.log(convertToTitle(701));