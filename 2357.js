const count = (num) => {
    return [...new Set(num)].filter(item => item !== 0).length
}

console.log(count([1, 5, 0, 3, 5]));