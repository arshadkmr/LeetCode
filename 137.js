const singleNumber = (nums) => {
    let result = null
    let map = {}
    for (let num of nums) {
        if (!map[num]) {
            map[num] = 1
        } else {
            map[num]++
        }
    }
    Object.keys(map).forEach(key =>{
        if( map[key] == 1){
            result= key
        }
    })
    return result
}

nums = [0,1,0,1,0,1,99]
console.log(singleNumber(nums));