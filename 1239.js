const maxLength = (array) => {
    let result = '';
    const dfs = (index, temp) => {
        if (temp.length > result.length) {
            result = temp;
        }
        if (index === arr.length) {
            return;
        }
        for (let i = index; i < arr.length; i++) {
            if (!hasDuplicate(temp + arr[i])) {
                dfs(i + 1, temp + arr[i]);
            }
        }
    }
    const hasDuplicate = (str) => {
        let set = new Set(str);
        return set.size !== str.length;
    }
    dfs(0, '');
    return result.length;
}
arr = ["ab", "cd", "cde", "cdef", "efg", "fgh", "abxyz"]
console.log(maxLength(arr));