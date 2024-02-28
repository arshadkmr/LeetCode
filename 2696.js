const minLength = (s) => {
    let array = s.split('')
    const recursion = (s) => {
        let removed = false
        for (let i = 0; i < s.length - 1; i++) {
            if ((s[i]==='A'&& s[i+1]==='B')||(s[i]==='C'&& s[i+1]==='D')) {
                s.splice(i, 2)
                removed = true
            }
        }
        if (removed) recursion(s)
        return s.length
    }
    return recursion(array)
}
s = "BJKDKABJ"

console.log(minLength(s));