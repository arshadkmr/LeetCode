const checkPerfectNumber = (num) => {
    if (num <= 2) {
        return false;
    }
    let sum = 0;
    for (let i = 2; i <= ~~Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i + num / i;
        }
    }

    return sum + 1 === num;
}
console.log(checkPerfectNumber(26));