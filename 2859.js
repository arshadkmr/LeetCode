const sumIndicesWithSetBits = (nums, k) => {
    let sum=0
    for(let i=0;i<nums.length;i++) {
        let setBit = i.toString(2).split('1').length-1
        if(setBit===k){
            sum+=nums[i]
        }
    }
    return sum
}


nums = [5,10,1,5,2], k = 1
console.log(sumIndicesWithSetBits(nums, k));