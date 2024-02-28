const countOdd = (start, end) => {
    if (start % 2 === 0 && end % 2 === 0) {
        return Math.floor((end - start) / 2)
    } else {
        return Math.ceil((end - start + 1) / 2)
    }
}

console.log(countOdd(8, 10));

