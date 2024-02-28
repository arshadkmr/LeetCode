// const check = (array) => {
//     let flag = 0
//     let res = []
//     let index

//     for (let i = 0; i < array.length - 1; i++) {
//         if (Math.abs(array[i] - array[i + 1]) !== 1||Math.abs(res[i] - res[i + 1]) !== 0) {
//             flag = 0
//             index = i + 1;
//         } else {
//             flag = 1
//         }
//     }
//     if (flag === 1) {
//         for (let i = index; i < array.length; i++) {
//             res.push(array[i]);
//         }
//         for (let i = 0; i < index; i++) {
//             res.push(array[i]);
//         }
//     } else {
//         return true
//     }
//     for (let i = 0; i < res.length - 1; i++) {
//         if (Math.abs(res[i] - res[i + 1]) !== 1) {
//             return false
//         } else {
//             flag = 1
//         }
//     }
//     return flag === 1 ? true : false
// }

const check = (array) => {
    let flag
    let res = []
    let index
    if (array.length === 1) return true
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1] || array[i] === array[i + 1]) {
            flag = 0
        } else {
            index = i + 1
            flag = 1
            break
        }
    }
    if (flag === 1) {
        for (let i = index; i < array.length; i++) {
            res.push(array[i])
        }
        for (let i = 0; i < index; i++) {
            res.push(array[i])
        }
    }
    for (let i = 0; i < res.length - 1; i++) {
        if (res[i] < res[i + 1] || res[i] === res[i + 1]) {
            flag = 0
        } else {
            flag = 1
            break
        }
    }
    return flag === 0 ? true : false
}

let array = [3, 4, 5, 1, 2]

console.log(check(array));