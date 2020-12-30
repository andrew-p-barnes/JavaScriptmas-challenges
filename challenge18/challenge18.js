/* Given array of ints, for each index, search the previous indexes for the last (from the left i.e index 0) position that contains a smaller value. Store
that value at the same index in a new array. If no value is found, store -1 instead. */

function arrayPreviousLess(nums) {
    let previousLessArr = [];
    for (let i = 0; i < nums.length; i++) {
        let previousLess = -1; // initialise as -1 as that is the default value if no smaller previous values exist in nums
        for (let j = 0; j <= i; j++) {
            if (nums[j] < nums[i]) {
                previousLess = nums[j];
            }
        }
        previousLessArr.push(previousLess);
    }
    return previousLessArr;
}

console.log(arrayPreviousLess([3,5,2,4,5]));