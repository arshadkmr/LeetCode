const smallestEqual = (nums)=>{
    for (let i=0; i<nums.length; i++){
        if(i%10===nums[i]){
            return i
        }
    }
    return -1
}
nums =[1,2,3,4,5,6,7,8,9,0]

console.log(smallestEqual(nums));