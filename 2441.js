const findMax = (num) => {
    let largest = -1
    let set = new Set(num)
    for(let item of num){
        if(set.has(item)&&set.has(-item)){
            largest = Math.max(largest,Math.abs(item))
        }
    }
    return largest
}

nums = [-25, 25, -27, 45, 31, 46, 46, 21]
console.log(findMax(nums));