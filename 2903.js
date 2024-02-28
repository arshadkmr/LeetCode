const findIndices = (nums, indexDifference, valueDifference) => {
    if(indexDifference===0&&valueDifference===0)return [0,0]
    let index1 = -1
    let index2 = -1
    for (let i = 0; i < nums.length-1; i++) {
        for(let j=i+1;j<nums.length; j++) {
            if(Math.abs(i-j)>=indexDifference&&Math.abs(nums[i]-nums[j])>=valueDifference){
                index1=i
                index2=j
            }
        }
    }
    return [index1,index2];
}

nums = [1,2,3], indexDifference = 2, valueDifference = 4
console.log(findIndices(nums, indexDifference, valueDifference));