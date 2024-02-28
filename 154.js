const findMin = (array) => {
    // let min=Infinity
    // for(let nums of array){
    //     min=Math.min(min,nums)
    // }
    // return min

    let start = 0
    let end = array.length - 1
    while (start < end) {
        let mid = Math.floor((end - start) / 2)
        if (array[mid] > array[end]) {
            start = mid + 1
        } else if (array[mid] < array[end]) {
            end = mid
        } else {
            end--
        }
    }
    return array[start]
}

nums = [2, 2, 2, 0, 1]
console.log(findMin(nums));