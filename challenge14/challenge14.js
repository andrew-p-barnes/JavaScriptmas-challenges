/* Given an array of ints, find the pair of adjacent elements that has the largest absolute difference and return that difference */

function arrayMaximalAdjacentDifference(nums) {
    let maxPairDifference = Math.abs(nums[0] - nums[1]);
    for (let i = 1; i < nums.length; i++) { // initialise i at 1 as index 0 is already considered when maxPairProduct is initialised.
        let pairDifference = Math.abs(nums[i] - nums[i+1]);
        if (pairDifference > maxPairDifference) {
            maxPairDifference = pairDifference;
        }
    }
    return maxPairDifference;
;}

console.log(arrayMaximalAdjacentDifference([2,4,1,0]));
console.log(arrayMaximalAdjacentDifference([2,9,1,0]));