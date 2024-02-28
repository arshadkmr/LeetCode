const maximumTripletValue=(nums)=>{
    let sum=0
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                sum = Math.max(sum,(nums[i] - nums[j]) * nums[k])
            }
        }
    }
    return sum
}

nums = [1,2,3]
maximumTripletValue(nums)