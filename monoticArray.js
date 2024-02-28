let array = [1,3,2,4]

function isMonotonic(array) {
    let increasing = false;
    let decreasing = false;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            increasing = true;
        } else if (array[i] < array[i - 1]) {
            decreasing = true;
        }
        // If both increasing and decreasing are true, the array is not monotonic.
        if (increasing && decreasing) {
            return false;
        }
    }
    // If either increasing or decreasing is true, the array is monotonic.
    return true;
}

console.log(isMonotonic(array));