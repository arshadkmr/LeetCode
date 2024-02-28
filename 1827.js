const minOperations = (num) => {
    let count = 0
    for(let i=1;i<num.length;i++) {
        if(num[i]<=num[i-1]) {
            count +=num[i-1]-num[i]+1
            num[i]=num[i-1]+1
        }
    }
    return count
}

let nums = [1, 1, 1]
minOperations(nums)