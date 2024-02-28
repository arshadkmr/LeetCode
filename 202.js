const isHappy = (n) => {
    if (n === 1) return true
    else {
        const recursion = (n) => {
            if (n === 20) return false
            let happy = false
            let sum = 0
            let array = n.toString().split('')
            for (let number of array) {
                sum += Number(number) * Number(number)
            }
            console.log(sum);
            if (sum.toString() != 1) {
                return recursion(sum)
            } else if (sum == 1) {
                happy = true
            }
            return happy
        }
        return recursion(n)
    }
}

console.log(isHappy(2));