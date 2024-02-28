const median = (arr1, arr2) => {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i])
    }
    let sortedArray = result.sort((a,b)=>a-b)
    let index = Math.floor(sortedArray.length / 2)
    if (sortedArray.length % 2 === 0) {
        let sum = (sortedArray[index] + sortedArray[index - 1]) / 2
        return sum
    } else {
        return sortedArray[index]
    }
}

nums1 =[3], nums2 = [-2,-1]
console.log(median(nums1, nums2));