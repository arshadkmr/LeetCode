const splitWordsBySeparator=(words,separator)=>{
    let result = []
    for(let word of words){
        let splittedWord = word.split(separator)
        for(let item of splittedWord){
            if(item!==''){
                result.push(item)
            }
        }
    }
    return result
}

words =["one.two.three","four.five","six"], separator = "."
console.log(splitWordsBySeparator(words,separator));