const furthestDistanceFromOrigin = (moves) => {
    let distance = 0, distance2 = 0;
    for (let direction of moves) {
        if (direction === 'L') distance--, distance2--;
        else if (direction === 'R') distance++, distance2++;
        else distance--, distance2++;
    }
    return Math.max(Math.abs(distance), Math.abs(distance2))
}
moves = "_R__LL_"
console.log(furthestDistanceFromOrigin(moves));