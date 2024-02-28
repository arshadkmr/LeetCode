const lastVisitedInteger = (words) => {
    let prevCount = 0
    let integer = []
    let result = []
    for (let word of words) {
        if (word === 'prev') {
            prevCount++
            if(prevCount<=integer.length) {
                result.push(Number(integer[integer.length-prevCount]))
            }else{
                result.push(-1)
            }
        } else {
            integer.push(Number(word))
            prevCount=0
        }
    }
    return result
}

words = ["1","2","prev","prev","prev"]
lastVisitedInteger(words)