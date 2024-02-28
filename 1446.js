const maxPower = (s) => {
    let max = 0
    for (let i = 0; i < s.length; i++) {
        let sum = 0
        let j = i
        while (s[i] === s[j]) {
            sum++
            if(j<s.length){
                j++
            }
        }
        if (sum > max) max = sum
    }
    return max
}

const s = "abbcccddddeeeeedcba"
console.log(maxPower(s));