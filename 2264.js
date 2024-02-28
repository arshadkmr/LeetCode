const largestInteger = (num) => {
    let string = num.toString();
    for (let i = 9; i >= 0; i--) {
        if (string.includes(`${i}${i}${i}`)) {
            return `${i}${i}${i}`;
        }
    }
    return ''
}
console.log(largestInteger(6777133339));