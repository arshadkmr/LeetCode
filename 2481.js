const numberOfCuts = (n) => {
    if (n === 1) return 0
    else return n % 2 === 0 ? n / 2 : n
}