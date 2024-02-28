// const isUgly = (n) => {
//     if (n <= 0) return false
//     while (n >= 1) {
//         if (n % 2 === 0) {
//             n = n / 2
//         } else if (n % 3 === 0) {
//             n = n / 3
//         } else if (n % 5 === 0) {
//             n = n / 5
//         } else {
//             break
//         }
//     }
//     return n===1
// }

// console.log(isUgly(15));


const arr = [3, 2, 45, 1, 33, 64]

let mx = 0;
let sMax = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mx) {
        mx = arr[i]
    }
    if (arr[i] > sMax && arr[i] < mx) sMax = arr[i]
}
console.log(mx)
console.log(sMax)
