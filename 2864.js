const maximumOddBinaryNumber=(s)=>{
    let res=''
    let count1=0
    let count0=0
    for(let char of s){
        if(char==='1')count1++
        else count0++
    }
    for(let i=1;i<count1;i++){
        res+='1'
    }
    for(let i=1;i<=count0;i++){
        res+='0'
    }
    res+='1'
    return res
}

s = "0101"
console.log(maximumOddBinaryNumber(s));