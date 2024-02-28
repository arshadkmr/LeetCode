const maximumPairOfStrings = (words) => {
    let count=0
    while(words.length){
        let item = words.shift()
        item =item[1]+item[0]
        if(words.includes(item)) count++
    }
    return count
}

words = ["cd","ac","dc","ca","zz"]
console.log(maximumPairOfStrings(words));