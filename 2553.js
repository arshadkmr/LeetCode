const separateDigits = (nums)=>{
    let res=[]
    for(let item of nums){
        if(item.toString().length>0){
            let splitted = item.toString().split('')
            res.push(splitted)
        }else{
            res.push(item)
        }
    }
    return res.flat()
}
nums = [13,25,83,77]
console.log(separateDigits(nums));