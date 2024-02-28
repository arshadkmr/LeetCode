const arr1 = [2, 4, 3]
const arr2 = [5, 6, 4]

const arr3 = [9, 9, 9, 9, 9, 9, 9]
const arr4 = [9, 9, 9, 9]

const arr5=[0]
const arr6=[0]

// function add(arr1, arr2) {
//     let res = []
//     const length = arr1.length >= arr2.length ? arr1.length : arr2.length
//     if (arr1.length === 0 && arr2.length === 0) return null
//     if (arr1.length === 1 && arr2.length === 1 && arr1[0] === 0 && arr2[0] === 0) return res=[0]

//     for (let i = length - 1; i >= 0; i--) {
//         res.unshift(arr1[i]+arr2[i])
//     }
//     console.log(res)
//     for (let i = 0; i < res.length; i++) {
//         if (res[i].toString().length > 1) {
//             val=parseInt(res[i].toString()[0])
//             res[i] = parseInt(res[i].toString()[res[i].toString().length - 1])
//             res[i + 1] = res[i + 1]+val
//         }
//     }
//     return res
// }
function add(arr1, arr2) {
    let res = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    let carry = 0;
    for (let i = 0; i < maxLength; i++) {
        const digit1 = i < arr1.length ? arr1[arr1.length - 1 - i] : 0;
        const digit2 = i < arr2.length ? arr2[arr2.length - 1 - i] : 0;
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        res.unshift(sum % 10);
    }
    if (carry > 0) {
        res.unshift(carry);
    }
    return res;
}


console.log(add(arr5, arr6)) 