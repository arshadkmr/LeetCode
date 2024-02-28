// const isIsomorphic = (s, t) => {
//     let mapOfOne={}
//     let mapOfTwo={}
//     for(let i=0; i<s.length; i++) {
//         if (!mapOfOne[s[i]]) mapOfOne[s[i]] = t[i];
//         if (!mapOfTwo[t[i]]) mapOfTwo[t[i]] = s[i];
//         if (mapOfOne[s[i]] !== t[i] || mapOfTwo[t[i]] !== s[i]) return false;
//     }
//     return true
// }

// s = "egg", t = "add"
// console.log(isIsomorphic(s, t)); 

let array = [1, 2, 8, 3, 3, 4, 1, 2, 5, 6, 1, 5, 8, 4];


const findUnique = (array) => {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        let isUnique = true
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                isUnique = false
                break
            }
        }
        if (isUnique) {
            array[count] = array[i]
            count++
        }
    }
    array.length = count
    console.log(array);
}

const mapUnique = (array) => {
    let index=0
    let map = new Map()
    for (let value of array) {
        if (!map.has(value)) {
            map.set(value,1)
        }
    }
    for(let key of map.keys()) {
        array[index]=key 
        index++
    }
    array.length = index
    return array
}
console.log(mapUnique(array));
// findUnique(array)