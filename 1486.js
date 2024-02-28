const xorOperation = (n, start) => {
    let res=  start
    for (let i = 0; i < n; i++) {
        num =  start + 2 * i
        res = res^num
    }
    return res
}



console.log( xorOperation(5, 0));