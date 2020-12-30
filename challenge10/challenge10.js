/* Given an array of ints, find the pair of adjacent elements that has the largest product and return that product */

function adjacentElementsProduct(nums) {
    let maxPairProduct = nums[0] * nums[1];
    for (let i = 1; i < nums.length-1; i++) { // initialise i at 1 as index 0 is already considered when maxPairProduct is initialised.
        let pairProduct = nums[i] * nums[i+1];
        if (pairProduct > maxPairProduct) {
            maxPairProduct = pairProduct;
        }
    }
    return maxPairProduct;
}

console.log(adjacentElementsProduct([3,6,-2,-5,7,3]));