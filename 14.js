const longestCommonPrefix = (words) => {
    // let res = ''
    // if (words.length === 0) return res
    // for (let i = 0; i < words[0].length; i++) {
    //     const char = words[0][i];
    //     for (let j = 1; j < words.length; j++) {
    //         if (i >= words[j].length || words[j][i] !== char) {
    //             return res;
    //         }
    //     }
    //     res += char;
    // }
    // return res
    if (words === undefined || words.length === 0) { return ''; }

    return words.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });

}

strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs));