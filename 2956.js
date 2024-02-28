const findIntersectionValues = (num1,num2) => {
    let countNum1 =0
    let countNum2 =0
    for(let num of num1) {
        if(num2.includes(num)) {
            countNum1++
        }
    }
    for(let num of num2) {
        if(num1.includes(num)) {
            countNum2++
        }
    }
    return [countNum1,countNum2]
}

nums1 = [3,4,2,3], nums2 = [1,5]
console.log(findIntersectionValues(nums1,nums2));