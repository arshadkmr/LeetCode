const majorityElement = (nums) => {
    let major = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            major = nums[i];
            count = 1;
        } else if (major === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return major
}

nums = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(nums));