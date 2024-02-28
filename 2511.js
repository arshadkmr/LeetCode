const captureForts = (forts) => {
    let max = 0;
    let i = 0;
    while (i < forts.length) {
        if (forts[i] != 0) {
            let n = 0;
            while (forts[i + n + 1] == 0) n++;
            if (n > max && forts[i] * forts[i + n + 1] == -1) max = n;
            i += n + 1;
        } else {
            i++;
        }
    }
    return max;
}

forts = [0, 0, 1, -1]
console.log(captureForts(forts))
