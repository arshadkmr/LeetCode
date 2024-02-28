const twoOutOfThree = (array1, array2, array3) => {
    let result = []
    for (let i = 0; i < array1.length; i++) {
        let value = array1[i];
        let j = 0
        while (j < array2.length) {
            if (value === array2[j]) result.push(value)
            j++
        }
        let k = 0
        while (k < array3.length) {
            if (value === array3[k]) result.push(value)
            k++
        }
    }
    for (let i = 0; i < array2.length; i++) {
        let value = array2[i]
        let j = 0
        while (j < array3.length) {
            if (value === array3[j]) result.push(value)
            j++
        }
    }
    let final  = [...new Set(result)]
    return final
}


nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]

console.log(twoOutOfThree(nums1, nums2, nums3));