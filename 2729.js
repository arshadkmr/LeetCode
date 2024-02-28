const isFascinating = (n) => {
    let concat = `${n}${2*n}${3*n}`
    let unique = new Set(concat)
    unique.delete('0')
    return unique.size === 9 && unique.size === concat.length
}

console.log(isFascinating(783));