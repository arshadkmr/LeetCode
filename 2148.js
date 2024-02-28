const countElements = (num) => {
    // let count = 0;
    // let sorted = num.sort((a, b) => a - b)
    // for (let i = 1; i < sorted.length - 1; i++) {
    //     if (sorted[0] === sorted[i]) {
    //         continue
    //     } else {
    //         if (sorted[i] === sorted[sorted.length - 1]) {
    //             continue
    //         } else {
    //             count++
    //         }
    //     }
    // }
    // return count
    let count = 0;
    let minimum = Math.min(...num)
    let maximum = Math.max(...num)
    for (let i = 0; i < num.length; i++) {
        if (num[i] > minimum && num[i] < maximum) {
            count++
        }
    }
    return count
}

console.log(countElements([-89, 39, 39, -89, 39, 39]));