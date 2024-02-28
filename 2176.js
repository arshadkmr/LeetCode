const countPairs = (num, k) => {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] === num[j] && (i * j) % k === 0) {
                count++
            }
        }
    }
    return count
}

nums = [1,2,3,4], k = 1

console.log(countPairs(nums,k));