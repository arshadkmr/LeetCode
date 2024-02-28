const findIndex = (string, target) => {
    if (string.includes(target)) {
        return string.search(target)
    } else {
        return -1
    }
}

haystack = "leetcode", needle = "leeto"
console.log(findIndex(haystack, needle));