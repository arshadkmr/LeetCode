const c = {
    name: "john",
    age: 30
}

const d = {
    name: "john",
    age: 30
}
const isSame = (c, d) => {
    for (let key in c) {
        if (!d.hasOwnProperty(key)) {
            return false
        }
    }
    return true
}
console.log(isSame(c, d));

let input = "hi arshad"
let output = "ih dahsra"
let array = input.split(' ')
for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split('').reverse().join('')
}
console.log(array.join(' '))

let arr = [
    {
        name: "lokesh",
        subjects: [{ Maths: "60" }, { History: 30 }, { English: "50" }, { Biology: "40" }],
        total: ""
    },
    {
        name: "prasad",
        subjects: [{ Maths: "35" }, { History: "66" }, { English: "20" }, { Biology: "30" }],
        total: ""
    }
]


const totalMark = (array) => {
    for (let student of array) {
        // console.log(student.subjects.reduce((acc, item) => Number(Object.values(item)) + acc, 0))
        let values = student.subjects.reduce((acc, item) => Number(Object.values(item)) + acc, 0)
        console.log(values);
        student.total += values
    }
}

totalMark(arr)
console.log(arr);

// try {
//     try {

//     } catch (err) {
//         console.log('catch inside try')
//         throw Error()
//     }
// } catch (err) {
//     console.log('catch')
// } finally {
//     console.log('finally')
// }