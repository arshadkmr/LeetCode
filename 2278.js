const percentageLetter = (s, k) => {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === k) count++;
    }
    return Math.floor(count / s.length * 100)
}

s = "foobar", letter = "o"

percentageLetter(s, letter)