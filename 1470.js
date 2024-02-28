const shuffle =(num,n)=>{
    let res=[]
    for(let i=0;i<n;i++){
        res.push(num[i])
        res.push(num[i+n])
    }
    return res
}

shuffle([1,2,3,4,4,3,2,1],4)