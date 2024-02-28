const numberOfEmployees = (hours, target) => {
    // let count = 0
    // for(let item of hours){
    //     if(item>=target)count++;
    // }
    // return count
    return hours.reduce((acc, item) => {
        if (item >= target) {
            acc++
        }
        return acc
    }, 0)
}

hours = [0, 1, 2, 3, 4], target = 2
console.log(numberOfEmployees(hours, target));