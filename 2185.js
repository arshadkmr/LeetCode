// const prefixCount =(word,prefix)=>{
//     let count = 0
//     for(let item of word){
//         if(item.startsWith(prefix))count++;
//     }
//     return count
// }

// words = ["leetcode","win","loops","success"], pref = "code"

// console.log(prefixCount(words, pref));


const prefixCount = (words, pref) => {
    let prefCount 
    let count = 0
    for (let item of words) {
        prefCount=0
        for (let i = 0; i < item.length; i++) {
            if (item[i] === pref[i]) {
                prefCount++;
            }
        }
        if(prefCount===pref.length){
            count++
        }
    }
    return count
}
words = ["lewsmb","lewrydnve","lewqqm","lewec","lewn","lewb","lewedb"], pref = "lew"

console.log(prefixCount(words,pref));