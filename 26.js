const removeDuplicates = (nums) => {
    let k=0
    for(let i =0;i<nums.length;i++){
        if(nums[i]!==nums[k]){
            k++
            nums[k] = nums[i]
        }
    }
    return k+1
}
nums = [1,1,2]
console.log(removeDuplicates(nums));