const alternateDigitSum=(n)=>{
    let array = n.toString().split('')
    let sum = 0
    for(let i=0;i<array.length;i++){
        if(i%2===0){
            sum += Number(array[i])
        }else{
            sum +=Number( -array[i])
        }
    }
    return sum
}

console.log(alternateDigitSum(111));