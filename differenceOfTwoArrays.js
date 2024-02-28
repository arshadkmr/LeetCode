// nums1 = [1,2,3,3]
// nums2 = [1,1,2,2]

// var findDifference = function (nums1, nums2) {
//     let result =[]
//     // const length = nums1.length >= nums2.length ? nums1.length : nums2.length
//     // for (let i = 0; i < length; i++) {
//     //     if()
//     // }
//     const res = nums2.map((val) => nums1.filter(item => item !== val))
//     const res2 = nums1.map((val) => nums2.filter(item => item !== val))
//     result[0] = res[0]
//     result[1] = res2[1]
//     return result
// };
// console.log(findDifference(nums1, nums2));
function findDifference(nums1, nums2) {
    const difference1 = [];
    const difference2 = [];

    for (const num of nums1) {
        if (!nums2.includes(num) && !difference2.includes(num)) {
            difference2.push(num);
        } 
    }

    for (const num of nums2) {
        if (!nums1.includes(num) && !difference1.includes(num)) {
            difference1.push(num);
        }
    }

    return [difference2, difference1];
}

const nums1 = [1, 2, 3, 3];
const nums2 = [1, 1, 2, 2];

console.log(findDifference(nums1, nums2));