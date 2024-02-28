const getCommon = (num1, num2) => {
    let map = {}
    for (let item of num1) {
        if (!map[item]) {
            map[item] = 1
        }
    }
    for (let item of num2) {
        if (map[item]) return item
    }
    return -1
}

nums1 = [1,2,3,6], nums2 = [2,3,4,5]
console.log(getCommon(nums1, nums2));