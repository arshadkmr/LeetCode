const busyStudent = (start, end, query) => {
    let count = 0
    for (let i = 0; i < start.length; i++) {
        if(query>=start[i]&&query<=end[i])count ++
    }
    return count
}

let start =[4]
let end = [4]
console.log(busyStudent(start, end, 4));