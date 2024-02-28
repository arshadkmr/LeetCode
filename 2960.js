const countTestedDevices = (array) => {
    let count=0
    for(let i =0;i<array.length;i++) {
        if(array[i]>0){
            count++
            for(let j=i+1;j<array.length;j++) {
                array[j] = array[j]-1
            }
        }
    }
    return count
}

batteryPercentages = [0,2]
console.log(countTestedDevices(batteryPercentages));