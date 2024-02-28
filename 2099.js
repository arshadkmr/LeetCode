const maxSequence = (num, k) => {
    if (num.length === k) return num
    let sorted = [...num].sort((a, b) => b - a)
    sorted = sorted.slice(0, k)
    let subArray = []
    for (let i = 0; i < num.length && sorted.length > 0; i++) {
        let index = sorted.lastIndexOf(num[i])
        if(index>=0){
            subArray.push(num[i])
            sorted.splice(index, 1)
        }
    }
    return subArray
}
nums = [-1,-2,3,4], k = 3
console.log(maxSequence(nums, k));
