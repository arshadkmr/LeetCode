const countEven = (num) => {
    let count = 0
    for (let i = 2; i <= num; i++) {
        if (i < 10 && i % 2 === 0) {
            count++;
        } else {
            let array = i.toString().split('')
            let sum = array.reduce((total,item)=>total+Number(item),0);
            if(sum%2===0) count++;
        }
    }
    return count
}
console.log(countEven(909));