const kLengthPart = (num, k) => {
    for (let i = 0; i < num.length; i++) {
        if (num[i] === 1 && i!==num.length - 1) {
            let length = 0
            let j=i+1
            while(num[j]!==1){
                length++
                if(j<num.length){
                    j++
                }else{
                    break
                }
            }
            if (length < k ) {
                return false
            }
        }
    }
    return true
}

const num = [1,0,0,0]
console.log(kLengthPart(num, 1))