// const chunk = (array, size) => {
//     let result = []
//     if (array.length === 0) return result
//     let chunk = []
//     for (let i = 0; i < array.length; i++) {
//         chunk.push(array[i])
//         if (chunk.length === size) {
//             result.push(chunk)
//             chunk = []
//         }
//     }
//     if (chunk.length) result.push(chunk)
//     return result
// }

// arr = [8, 5, 3, 2, 6], size = 6
// console.log(chunk(arr, size));

let promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeek";
    if (x === y) {
        resolve("Success, You are a GEEK");
    } else {
        reject("Error");
    }
});

promise.then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
});
