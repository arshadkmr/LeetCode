const intersection=(nums1,nums2)=>{
    let res=new Set()
    for(let num of nums1){
        if(nums2.includes(num)){
            res.add(num)
        }
    }
    return [...res];
}

nums1 = [4,9,5], nums2 = [9,4,9,8,4]

intersection(nums1,nums2)