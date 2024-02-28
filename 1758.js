const minOperation = (string) => {
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < string.length; i++) {
        if (i % 2) {
            if (string[i] !== '0') count1++;
            if (string[i] !== '1') count2++;
        } else {
            if (string[i] !== '1') count1++;
            if (string[i] !== '0') count2++;
        }
    }
    return Math.min(count1, count2)
}

let string = "1111"

console.log(minOperation(string));