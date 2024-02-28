const sortString = (string) => {
    // let sorted = string.split('').sort()
    // let map = {}
    // for (let char of sorted) {
    //     if (!map[char]) {
    //         map[char] = 1
    //     } else {
    //         map[char] += 1
    //     }
    // }
    // let str = ''
    // console.log(map);
    // while (str.length < string.length) {
    //     const keys = Object.keys(map)
    //     if (str[str.length - 1] === sorted[sorted.length - 1] && str.length < string.length) {
    //         keys.reverse().forEach(key => str += key)
    //         // values.forEach(value => value--)
    //     } else {
    //         keys.forEach(key => str += key)
    //         // values.forEach(value => value--)
    //     }
    //     // Object.values(map).forEach(values => console.log(values))
    // }
    // return str
    s = string.split``.sort().join``
    let result = ''
    while(s.length){
        result += s.match(/([a-z])(?!\1)/gi).join``
        s = s.replace(/([a-z])(?!\1)/gi, '')
        result += (s.match(/([a-z])(?!\1)/gi) || []).reverse().join``
        s = s.replace(/([a-z])(?!\1)/gi, '')
    }
    return result
}
let string = 'leetcode'
console.log(sortString(string));
