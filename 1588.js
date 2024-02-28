const sumOddArray =(array)=>{
    if(array.length===0) return 
    let sum=0
    const findSum=(first,last)=>{
        let sum=0
        for(let i=first;i<=last;i++){
            sum += array[i]
        }
        return sum
    }
    for(let i =0;i<array.length;i++){
        for(let j=0;(j+i)<array.length;j=j+2){
            sum +=findSum(i,i+j)
        }
    }
    return sum
}

// console.log(sumOddArray([10,11,12]));

const a = [1,2,3,4,5,6,7,8,9,10]

console.log(a[1]);