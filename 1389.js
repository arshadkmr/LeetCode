const createTargetArray = (index, num) => {
    let targetArray = []
    for (let i = 0; i < index.length; i++) {
        if(targetArray[index[i]]!==undefined){
            for(let j=targetArray.length-1;j>=index[i];j--){
                targetArray[j+1]=targetArray[j]
            }
        }
        targetArray[index[i]] =num[i]
    }
    return targetArray
}


const num =[1]
const index = [0]

console.log(createTargetArray(index,num));